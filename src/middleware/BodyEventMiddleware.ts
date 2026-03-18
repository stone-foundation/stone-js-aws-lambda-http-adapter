import bytes from 'bytes'
import typeIs from 'type-is'
import { IncomingMessage } from 'node:http'
import { isMultipart, getCharset } from '@stone-js/http-core'
import { IBlueprint, isNotEmpty, NextMiddleware } from '@stone-js/core'
import { AwsLambdaHttpAdapterError } from '../errors/AwsLambdaHttpAdapterError'
import { AwsLambdaHttpAdapterContext, AwsLambdaHttpAdapterResponseBuilder, AwsLambdaHttpEvent } from '../declarations'

/**
 * Represents the configuration options for parsing the request body.
 */
interface HttpBodyOptions {
  limit: string
  defaultType: string
  defaultCharset: string
}

/**
 * Class representing a BodyEventMiddleware.
 *
 * This middleware handles platform-specific messages and transforms them into Stone.js IncomingEvent objects.
 *
 * @author Mr. Stone
 */
export class BodyEventMiddleware {
  /**
   * The blueprint for resolving configuration and dependencies.
   */
  private readonly blueprint: IBlueprint

  /**
   * Create a BodyEventMiddleware.
   *
   * @param {blueprint} options - Options for creating the BodyEventMiddleware.
   */
  constructor ({ blueprint }: { blueprint: IBlueprint }) {
    this.blueprint = blueprint
  }

  /**
   * Handles the incoming event, processes it, and invokes the next middleware in the pipeline.
   *
   * @param context - The adapter context containing the raw event, execution context, and other data.
   * @param next - The next middleware to be invoked in the pipeline.
   * @returns A promise that resolves to the destination type after processing.
   *
   * @throws {AwsLambdaHttpAdapterError} If required components such as the rawEvent or IncomingEventBuilder are not provided.
   */
  async handle (context: AwsLambdaHttpAdapterContext, next: NextMiddleware<AwsLambdaHttpAdapterContext, AwsLambdaHttpAdapterResponseBuilder>): Promise<AwsLambdaHttpAdapterResponseBuilder> {
    if (context.rawEvent === undefined || context.incomingEventBuilder?.add === undefined) {
      throw new AwsLambdaHttpAdapterError('The context is missing required components.')
    }

    if (!isMultipart(this.toNodeMessage(context.rawEvent))) {
      const body = this.getBody(this.toNodeMessage(context.rawEvent), context.rawEvent)
      const method = (body as any).$method$

      context
        .incomingEventBuilder
        .add('body', body)
        .add('metadata', body)
        // In fullstack forms, the method is spoofed and sent as a hidden field
      isNotEmpty(method) && context.incomingEventBuilder.add('method', method)
    }

    return await next(context)
  }

  /**
   * Convert the raw event into a Node.js IncomingMessage.
   *
   * @param rawEvent - The raw event from the platform.
   * @returns The converted IncomingMessage.
   */
  private toNodeMessage (rawEvent: AwsLambdaHttpEvent): IncomingMessage {
    return {
      headers: {
        'content-type': rawEvent.headers['content-type'] ?? rawEvent.headers['Content-Type'],
        'content-length': rawEvent.headers['content-length'] ?? rawEvent.headers['Content-Length'],
        'transfer-encoding': rawEvent.headers['transfer-encoding'] ?? rawEvent.headers['Transfer-Encoding']
      }
    } as unknown as IncomingMessage
  }

  /**
   * Extract and parse the body from the message.
   *
   * @param message - The incoming HTTP message.
   * @returns A Promise resolving to the parsed body.
   * @throws {AwsLambdaHttpAdapterError} If the body parsing fails or is invalid.
   */
  private getBody (message: IncomingMessage, rawEvent: AwsLambdaHttpEvent): unknown {
    if (!typeIs.hasBody(message)) {
      return {}
    }

    const defaultOptions = { limit: '100kb', defaultType: 'text/plain', defaultCharset: 'utf-8' }
    const { defaultType, defaultCharset, limit: rawLimit } = this.blueprint.get<HttpBodyOptions>('stone.http.body', defaultOptions)
    const limit = bytes.parse(rawLimit) ?? 100000
    const encoding = getCharset(message, defaultCharset) as BufferEncoding
    const type = typeIs(message, ['urlencoded', 'json', 'text', 'bin']) ?? defaultType

    const rawBodyContent = this.getNormalizedRawBody(rawEvent, encoding)

    if (Buffer.byteLength(rawBodyContent, encoding) > limit) {
      throw new AwsLambdaHttpAdapterError('Body payload exceeds configured limit.')
    }

    return this.parseBodyContent(type, rawBodyContent, encoding)
  }

  /**
   * Get the normalized raw body from the event.
   *
   * @param rawEvent - The raw event containing the body.
   * @param encoding - The encoding to use for the body.
   * @returns The normalized body as a string.
   */
  private getNormalizedRawBody (rawEvent: AwsLambdaHttpEvent, encoding: BufferEncoding): string {
    if (typeof rawEvent.body === 'string') {
      return rawEvent.isBase64Encoded === true
        ? Buffer.from(rawEvent.body, 'base64').toString(encoding)
        : rawEvent.body
    }

    if (typeof rawEvent.body === 'object' && rawEvent.body !== null) {
      return JSON.stringify(rawEvent.body)
    }

    return ''
  }

  /**
   * Parse the body content based on the specified type and encoding.
   *
   * @param type - The content type of the body.
   * @param body - The raw body content as a string.
   * @param encoding - The encoding of the body content.
   * @returns The parsed body content as an object, string, or Buffer.
   * @throws {AwsLambdaHttpAdapterError} If parsing fails.
   */
  private parseBodyContent (type: string | false, body: string, encoding: BufferEncoding): unknown {
    try {
      switch (type) {
        case 'json':
          return isNotEmpty(body) ? JSON.parse(body) : {}
        case 'text':
          return body
        case 'urlencoded':
          return new URLSearchParams(body)
        case 'bin':
          return Buffer.from(body, encoding)
        default:
          return {}
      }
    } catch (error: any) {
      throw new AwsLambdaHttpAdapterError('Failed to parse request body.', { cause: error })
    }
  }
}

/**
 * Meta Middleware for processing the request body.
 */
export const MetaBodyEventMiddleware = { module: BodyEventMiddleware, isClass: true }

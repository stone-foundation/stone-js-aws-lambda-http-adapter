import { NextPipe } from '@stone-js/pipeline'
import { IBlueprint, isNotEmpty } from '@stone-js/core'
import { IncomingHttpHeaders, IncomingMessage } from 'node:http'
import { isMultipart, getFilesUploads } from '@stone-js/http-core'
import { AwsLambdaHttpAdapterError } from '../errors/AwsLambdaHttpAdapterError'
import { AwsLambdaHttpAdapterContext, AwsLambdaHttpAdapterResponseBuilder, AwsLambdaHttpEvent } from '../declarations'

/**
 * Class representing a FilesEventMiddleware.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class FilesEventMiddleware {
  /**
   * The blueprint for resolving configuration and dependencies.
   */
  private readonly blueprint: IBlueprint

  /**
   * Create a FilesEventMiddleware.
   *
   * @param {blueprint} options - Options for creating the FilesEventMiddleware.
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
  async handle (context: AwsLambdaHttpAdapterContext, next: NextPipe<AwsLambdaHttpAdapterContext, AwsLambdaHttpAdapterResponseBuilder>): Promise<AwsLambdaHttpAdapterResponseBuilder> {
    if (context.rawEvent === undefined || context.incomingEventBuilder?.add === undefined) {
      throw new AwsLambdaHttpAdapterError('The context is missing required components.')
    }

    if (isMultipart(this.normalizeEvent(context.rawEvent) as unknown as IncomingMessage)) {
      const options = this.blueprint.get<Record<string, any>>('stone.http.files.upload', {})
      const response = await getFilesUploads(this.normalizeEvent(context.rawEvent), options)
      const method = response.fields.$method$

      context
        .incomingEventBuilder
        .add('files', response.files)
        .add('body', response.fields)
        // In fullstack forms, the method is spoofed and sent as a hidden field
      isNotEmpty(method) && context.incomingEventBuilder.add('method', method)
    }

    return await next(context)
  }

  /**
   * Normalize the incoming event to an IncomingMessage.
   *
   * @param rawEvent - The raw event to be normalized.
   * @returns The normalized event.
   */
  private normalizeEvent (rawEvent: AwsLambdaHttpEvent): { headers: IncomingHttpHeaders, body: unknown } {
    return {
      body: rawEvent.body,
      headers: {
        'content-type': rawEvent.headers['content-type'] ?? rawEvent.headers['Content-Type'],
        'content-length': rawEvent.headers['content-length'] ?? rawEvent.headers['Content-Length'],
        'transfer-encoding': rawEvent.headers['transfer-encoding'] ?? rawEvent.headers['Transfer-Encoding']
      }
    }
  }
}

/**
 * Meta Middleware for processing files uploads.
 */
export const MetaFilesEventMiddleware = { module: FilesEventMiddleware, isClass: true }

import { RawHttpResponseWrapper } from './RawHttpResponseWrapper'
import { AdapterContext, IAdapterEventBuilder, RawResponseOptions } from '@stone-js/core'
import { IncomingHttpEvent, IncomingHttpEventOptions, OutgoingHttpResponse } from '@stone-js/http-core'

/**
 * Represents a raw HTTP response, extending from `RawHttpResponseOptions`.
 */
export type RawHttpResponse = RawHttpResponseOptions

/**
 * Represents the AWS Lambda execution context as a key-value pair.
 */
export type AwsLambdaContext = Record<string, unknown>

/**
 * Represents an AWS Lambda event handler function.
 *
 * @template RawResponseType - The type of the response returned by the handler.
 * @param rawEvent - The raw event received by the AWS Lambda function.
 * @param context - The AWS Lambda execution context.
 * @returns A promise resolving to the response of type `RawResponseType`.
 */
export type AwsLambdaEventHandlerFunction<RawResponseType = RawHttpResponse> = (
  rawEvent: AwsLambdaHttpEvent,
  context: AwsLambdaContext
) => Promise<RawResponseType>

/**
 * Represents the response builder for the AWS Lambda http Adapter.
 */
export type AwsLambdaHttpAdapterResponseBuilder = IAdapterEventBuilder<RawHttpResponseOptions, RawHttpResponseWrapper>

/**
 * Represents the structure of an AWS Lambda HTTP event.
 *
 * This interface defines the standard properties of an HTTP event in AWS Lambda,
 * including headers, query parameters, the request context, and other metadata.
 */
export interface AwsLambdaHttpEvent extends Record<string, unknown> {
  /**
   * The path of the HTTP request.
   */
  path?: string

  /**
   * The body of the HTTP request.
   */
  body?: unknown

  /**
   * The encoding format of the body, such as `base64`.
   */
  encoding?: string

  /**
   * The raw path of the HTTP request, as sent by the client.
   */
  rawPath?: string

  /**
   * Indicates whether the request body is base64-encoded.
   */
  isBase64Encoded?: boolean

  /**
   * The headers of the HTTP request as key-value pairs.
   */
  headers: Record<string, string>

  /**
   * The HTTP method of the request (e.g., `GET`, `POST`).
   */
  httpMethod?: string

  /**
   * The query string parameters included in the request.
   */
  queryStringParameters?: Record<string, string>

  /**
   * The context of the request, including identity and HTTP metadata.
   */
  requestContext?: {
    identity?: {
      sourceIp?: string
    }
    httpMethod?: string
    http?: {
      method?: string
      sourceIp?: string
    }
  }
}

/**
 * Represents the context for the AWS Lambda HTTP Adapter.
 *
 * This interface extends `AdapterContext` and includes additional properties specific
 * to HTTP events in AWS Lambda.
 */
export interface AwsLambdaHttpAdapterContext extends AdapterContext<
AwsLambdaHttpEvent,
RawHttpResponse,
AwsLambdaContext,
IncomingHttpEvent,
IncomingHttpEventOptions,
OutgoingHttpResponse
> {
  /**
   * The raw HTTP response associated with the current context.
   */
  rawResponse: RawHttpResponse
}

/**
 * Represents options for configuring a raw HTTP response.
 *
 * Extends the `RawResponseOptions` interface to include additional properties
 * for managing response content, headers, status codes, and streaming files.
 */
export interface RawHttpResponseOptions extends RawResponseOptions {
  /**
   * The body of the HTTP response. Can be of any type, including strings, objects, or buffers.
   */
  body?: unknown

  /**
   * The HTTP status code of the response (e.g., `200`, `404`).
   */
  statusCode: number

  /**
   * The status message accompanying the HTTP status code (e.g., `OK`, `Not Found`).
   */
  statusMessage?: string

  /**
   * Headers to include in the HTTP response.
   * Can be provided as key-value pairs.
   */
  headers?: Record<string, string>

  /**
   * The encoding format of the response body, such as `base64`.
   */
  isBase64Encoded?: boolean
}

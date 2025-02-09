import { AWS_LAMBDA_HTTP_PLATFORM } from '../constants'
import { awsLambdaHttpAdapterResolver } from '../resolvers'
import { AwsLambdaHttpErrorHandler } from '../AwsLambdaHttpErrorHandler'
import { AdapterConfig, AppConfig, StoneBlueprint } from '@stone-js/core'
import { metaAdapterConfigMiddleware } from '../middleware/configMiddleware'
import { MetaIncomingEventMiddleware } from '../middleware/IncomingEventMiddleware'
import { MetaServerResponseMiddleware } from '../middleware/ServerResponseMiddleware'
import { HttpConfig, IncomingHttpEvent, OutgoingHttpResponse, httpCoreBlueprint } from '@stone-js/http-core'

/**
 * Configuration interface for the AWS Lambda Http Adapter.
 *
 * Extends the `AdapterConfig` interface from the Stone.js framework and provides
 * customizable options specific to the AWS Lambda platform. This includes
 * alias, resolver, middleware, hooks, and various adapter state flags.
 */
export interface AwsLambdaHttpAdapterAdapterConfig extends AdapterConfig {}

/**
 * Represents the AwsLambdaHttpAdapterConfig configuration options for the application.
 */
export interface AwsLambdaHttpAdapterConfig extends Partial<AppConfig<IncomingHttpEvent, OutgoingHttpResponse>> {
  http: Partial<HttpConfig>
}

/**
 * Blueprint interface for the AWS Lambda Http Adapter.
 *
 * This interface extends `StoneBlueprint` and defines the structure of the
 * AWS Lambda Http adapter blueprint used in the Stone.js framework. It includes
 * a `stone` object with an array of `AwsLambdaHttpAdapterConfig` items.
 */
export interface AwsLambdaHttpAdapterBlueprint extends StoneBlueprint<IncomingHttpEvent, OutgoingHttpResponse> {
  /**
   * Application-level settings, including environment, middleware, logging, and service registration.
   */
  stone: AwsLambdaHttpAdapterConfig
}

/**
 * Default blueprint configuration for the AWS Lambda Http Adapter.
 *
 * This blueprint defines the initial configuration for the AWS Lambda Http adapter
 * within the Stone.js framework. It includes:
 * - An alias for the AWS Lambda platform (`AWS_LAMBDA_HTTP_PLATFORM`).
 * - A default resolver function (currently a placeholder).
 * - Middleware, hooks, and state flags (`current`, `default`, `preferred`).
 */
export const awsLambdaHttpAdapterBlueprint: AwsLambdaHttpAdapterBlueprint = {
  stone: {
    ...httpCoreBlueprint.stone,
    builder: {
      middleware: metaAdapterConfigMiddleware
    },
    adapters: [
      {
        hooks: {},
        current: false,
        default: false,
        platform: AWS_LAMBDA_HTTP_PLATFORM,
        resolver: awsLambdaHttpAdapterResolver,
        middleware: [
          MetaIncomingEventMiddleware,
          MetaServerResponseMiddleware
        ],
        errorHandlers: {
          default: { module: AwsLambdaHttpErrorHandler, isClass: true }
        }
      }
    ]
  }
}

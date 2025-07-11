import { ErrorOptions, IntegrationError } from '@stone-js/core'

/**
 * Custom error for AWS Lambda adapter operations.
 */
export class AwsLambdaHttpAdapterError extends IntegrationError {
  constructor (message: string, options?: ErrorOptions) {
    super(message, options)
    this.name = 'AwsLambdaHttpAdapterError'
  }
}

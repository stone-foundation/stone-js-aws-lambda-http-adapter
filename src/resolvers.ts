import { AwsLambdaHttpAdapter } from './AwsLambdaHttpAdapter'
import { AdapterHooks, AdapterResolver, defaultKernelResolver, defaultLoggerResolver, IBlueprint } from '@stone-js/core'

/**
 * Adapter resolver for AWS Lambda HTTP adapter.
 *
 * Creates and configures an `AWSLambdaHttpAdapter` for handling HTTP events in AWS Lambda.
 *
 * @param blueprint - The `IBlueprint` providing configuration and dependencies.
 * @returns An `AWSLambdaHttpAdapter` instance.
 */
export const awsLambdaHttpAdapterResolver: AdapterResolver = (blueprint: IBlueprint) => {
  const hooks = blueprint.get<AdapterHooks>('stone.adapter.hooks', {})
  const loggerResolver = blueprint.get('stone.logger.resolver', defaultLoggerResolver)
  const handlerResolver = blueprint.get('stone.kernel.resolver', defaultKernelResolver)

  return AwsLambdaHttpAdapter.create({
    hooks,
    blueprint,
    handlerResolver,
    logger: loggerResolver(blueprint)
  })
}

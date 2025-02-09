[**AWS Lambda HTTP Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda HTTP Adapter Documentation](../../modules.md) / [resolvers](../README.md) / awsLambdaHttpAdapterResolver

# Function: awsLambdaHttpAdapterResolver()

> **awsLambdaHttpAdapterResolver**(`blueprint`): `IAdapter`

Defined in: [aws-lambda-http-adapter/src/resolvers.ts:12](https://github.com/stonemjs/aws-lambda-http-adapter/blob/b2e29f567ac56717023f9597000ee3f0d0278093/src/resolvers.ts#L12)

Adapter resolver for AWS Lambda HTTP adapter.

Creates and configures an `AWSLambdaHttpAdapter` for handling HTTP events in AWS Lambda.

## Parameters

### blueprint

`IBlueprint`\<`any`\>

The `IBlueprint` providing configuration and dependencies.

## Returns

`IAdapter`

An `AWSLambdaHttpAdapter` instance.

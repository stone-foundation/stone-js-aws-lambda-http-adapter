[**AWS Lambda HTTP Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda HTTP Adapter Documentation](../../modules.md) / [resolvers](../README.md) / awsLambdaHttpAdapterResolver

# Function: awsLambdaHttpAdapterResolver()

> **awsLambdaHttpAdapterResolver**(`blueprint`): `IAdapter`

Defined in: [aws-lambda-http-adapter/src/resolvers.ts:12](https://github.com/stonemjs/aws-lambda-http-adapter/blob/2fb8e4d048853c60484edbc94c3249aefb421def/src/resolvers.ts#L12)

Adapter resolver for AWS Lambda HTTP adapter.

Creates and configures an `AWSLambdaHttpAdapter` for handling HTTP events in AWS Lambda.

## Parameters

### blueprint

`IBlueprint`\<`any`\>

The `IBlueprint` providing configuration and dependencies.

## Returns

`IAdapter`

An `AWSLambdaHttpAdapter` instance.

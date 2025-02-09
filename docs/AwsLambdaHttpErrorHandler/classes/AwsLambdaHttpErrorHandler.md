[**AWS Lambda HTTP Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda HTTP Adapter Documentation](../../modules.md) / [AwsLambdaHttpErrorHandler](../README.md) / AwsLambdaHttpErrorHandler

# Class: AwsLambdaHttpErrorHandler

Defined in: [aws-lambda-http-adapter/src/AwsLambdaHttpErrorHandler.ts:18](https://github.com/stonemjs/aws-lambda-http-adapter/blob/b2e29f567ac56717023f9597000ee3f0d0278093/src/AwsLambdaHttpErrorHandler.ts#L18)

Class representing an AwsLambdaHttpErrorHandler.

## Implements

- `IAdapterErrorHandler`\<[`AwsLambdaHttpEvent`](../../declarations/interfaces/AwsLambdaHttpEvent.md), [`RawHttpResponse`](../../declarations/type-aliases/RawHttpResponse.md), [`AwsLambdaContext`](../../declarations/type-aliases/AwsLambdaContext.md)\>

## Constructors

### new AwsLambdaHttpErrorHandler()

> **new AwsLambdaHttpErrorHandler**(`options`): [`AwsLambdaHttpErrorHandler`](AwsLambdaHttpErrorHandler.md)

Defined in: [aws-lambda-http-adapter/src/AwsLambdaHttpErrorHandler.ts:26](https://github.com/stonemjs/aws-lambda-http-adapter/blob/b2e29f567ac56717023f9597000ee3f0d0278093/src/AwsLambdaHttpErrorHandler.ts#L26)

Create an AwsLambdaHttpErrorHandler.

#### Parameters

##### options

[`AwsLambdaHttpErrorHandlerOptions`](../interfaces/AwsLambdaHttpErrorHandlerOptions.md)

AwsLambdaHttpErrorHandler options.

#### Returns

[`AwsLambdaHttpErrorHandler`](AwsLambdaHttpErrorHandler.md)

## Methods

### handle()

> **handle**(`error`, `context`): `Promise`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\>

Defined in: [aws-lambda-http-adapter/src/AwsLambdaHttpErrorHandler.ts:41](https://github.com/stonemjs/aws-lambda-http-adapter/blob/b2e29f567ac56717023f9597000ee3f0d0278093/src/AwsLambdaHttpErrorHandler.ts#L41)

Handle an error.

#### Parameters

##### error

`Error`

The error to handle.

##### context

`AdapterErrorContext`\<[`AwsLambdaHttpEvent`](../../declarations/interfaces/AwsLambdaHttpEvent.md), [`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md), [`AwsLambdaContext`](../../declarations/type-aliases/AwsLambdaContext.md)\>

The context of the adapter.

#### Returns

`Promise`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\>

The raw response.

#### Implementation of

`IAdapterErrorHandler.handle`

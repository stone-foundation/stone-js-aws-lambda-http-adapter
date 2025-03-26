[**AWS Lambda HTTP Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda HTTP Adapter Documentation](../../modules.md) / [AwsLambdaHttpErrorHandler](../README.md) / AwsLambdaHttpErrorHandler

# Class: AwsLambdaHttpErrorHandler

Defined in: [aws-lambda-http-adapter/src/AwsLambdaHttpErrorHandler.ts:26](https://github.com/stonemjs/aws-lambda-http-adapter/blob/266a5c901335674bf07c5995909e8ee8116e2bba/src/AwsLambdaHttpErrorHandler.ts#L26)

Class representing an AwsLambdaHttpErrorHandler.

## Implements

- `IAdapterErrorHandler`\<[`AwsLambdaHttpEvent`](../../declarations/interfaces/AwsLambdaHttpEvent.md), [`RawHttpResponse`](../../declarations/type-aliases/RawHttpResponse.md), [`AwsLambdaContext`](../../declarations/type-aliases/AwsLambdaContext.md)\>

## Constructors

### new AwsLambdaHttpErrorHandler()

> **new AwsLambdaHttpErrorHandler**(`options`): [`AwsLambdaHttpErrorHandler`](AwsLambdaHttpErrorHandler.md)

Defined in: [aws-lambda-http-adapter/src/AwsLambdaHttpErrorHandler.ts:34](https://github.com/stonemjs/aws-lambda-http-adapter/blob/266a5c901335674bf07c5995909e8ee8116e2bba/src/AwsLambdaHttpErrorHandler.ts#L34)

Create an NodeHttpErrorHandler.

#### Parameters

##### options

[`AwsLambdaHttpErrorHandlerOptions`](../interfaces/AwsLambdaHttpErrorHandlerOptions.md)

NodeHttpErrorHandler options.

#### Returns

[`AwsLambdaHttpErrorHandler`](AwsLambdaHttpErrorHandler.md)

## Methods

### handle()

> **handle**(`error`, `context`): `AdapterEventBuilderType`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\>

Defined in: [aws-lambda-http-adapter/src/AwsLambdaHttpErrorHandler.ts:45](https://github.com/stonemjs/aws-lambda-http-adapter/blob/266a5c901335674bf07c5995909e8ee8116e2bba/src/AwsLambdaHttpErrorHandler.ts#L45)

Handle an error.

#### Parameters

##### error

`Error`

The error to handle.

##### context

`AdapterErrorContext`\<[`AwsLambdaHttpEvent`](../../declarations/interfaces/AwsLambdaHttpEvent.md), [`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md), [`AwsLambdaContext`](../../declarations/type-aliases/AwsLambdaContext.md)\>

The context of the adapter.

#### Returns

`AdapterEventBuilderType`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\>

The raw response builder.

#### Implementation of

`IAdapterErrorHandler.handle`

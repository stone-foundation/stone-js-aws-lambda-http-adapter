[**AWS Lambda HTTP Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda HTTP Adapter Documentation](../../../modules.md) / [middleware/ServerResponseMiddleware](../README.md) / ServerResponseMiddleware

# Class: ServerResponseMiddleware

Defined in: [aws-lambda-http-adapter/src/middleware/ServerResponseMiddleware.ts:13](https://github.com/stonemjs/aws-lambda-http-adapter/blob/2fb8e4d048853c60484edbc94c3249aefb421def/src/middleware/ServerResponseMiddleware.ts#L13)

Middleware for handling server responses and transforming them into the appropriate HTTP responses.

This middleware processes outgoing responses and attaches the necessary headers, status codes,
and body content to the HTTP response.

## Constructors

### new ServerResponseMiddleware()

> **new ServerResponseMiddleware**(): [`ServerResponseMiddleware`](ServerResponseMiddleware.md)

#### Returns

[`ServerResponseMiddleware`](ServerResponseMiddleware.md)

## Methods

### handle()

> **handle**(`context`, `next`): `Promise`\<[`AwsLambdaHttpAdapterResponseBuilder`](../../../declarations/type-aliases/AwsLambdaHttpAdapterResponseBuilder.md)\>

Defined in: [aws-lambda-http-adapter/src/middleware/ServerResponseMiddleware.ts:22](https://github.com/stonemjs/aws-lambda-http-adapter/blob/2fb8e4d048853c60484edbc94c3249aefb421def/src/middleware/ServerResponseMiddleware.ts#L22)

Handles the outgoing response, processes it, and invokes the next middleware in the pipeline.

#### Parameters

##### context

[`AwsLambdaHttpAdapterContext`](../../../declarations/interfaces/AwsLambdaHttpAdapterContext.md)

The adapter context containing the raw event, execution context, and other data.

##### next

`NextPipe`\<[`AwsLambdaHttpAdapterContext`](../../../declarations/interfaces/AwsLambdaHttpAdapterContext.md), [`AwsLambdaHttpAdapterResponseBuilder`](../../../declarations/type-aliases/AwsLambdaHttpAdapterResponseBuilder.md)\>

The next middleware to be invoked in the pipeline.

#### Returns

`Promise`\<[`AwsLambdaHttpAdapterResponseBuilder`](../../../declarations/type-aliases/AwsLambdaHttpAdapterResponseBuilder.md)\>

A promise resolving to the rawResponseBuilder.

#### Throws

If required components are missing in the context.

[**AWS Lambda HTTP Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda HTTP Adapter Documentation](../../../modules.md) / [middleware/ServerResponseMiddleware](../README.md) / ServerResponseMiddleware

# Class: ServerResponseMiddleware

Defined in: [aws-lambda-http-adapter/src/middleware/ServerResponseMiddleware.ts:14](https://github.com/stonemjs/aws-lambda-http-adapter/blob/b2e29f567ac56717023f9597000ee3f0d0278093/src/middleware/ServerResponseMiddleware.ts#L14)

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

Defined in: [aws-lambda-http-adapter/src/middleware/ServerResponseMiddleware.ts:23](https://github.com/stonemjs/aws-lambda-http-adapter/blob/b2e29f567ac56717023f9597000ee3f0d0278093/src/middleware/ServerResponseMiddleware.ts#L23)

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

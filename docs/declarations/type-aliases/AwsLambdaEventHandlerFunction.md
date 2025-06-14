[**AWS Lambda HTTP Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda HTTP Adapter Documentation](../../modules.md) / [declarations](../README.md) / AwsLambdaEventHandlerFunction

# Type Alias: AwsLambdaEventHandlerFunction()\<RawResponseType\>

> **AwsLambdaEventHandlerFunction**\<`RawResponseType`\>: (`rawEvent`, `context`) => `Promise`\<`RawResponseType`\>

Defined in: [aws-lambda-http-adapter/src/declarations.ts:23](https://github.com/stonemjs/aws-lambda-http-adapter/blob/2fb8e4d048853c60484edbc94c3249aefb421def/src/declarations.ts#L23)

Represents an AWS Lambda event handler function.

## Type Parameters

• **RawResponseType** = [`RawHttpResponse`](RawHttpResponse.md)

The type of the response returned by the handler.

## Parameters

### rawEvent

[`AwsLambdaHttpEvent`](../interfaces/AwsLambdaHttpEvent.md)

The raw event received by the AWS Lambda function.

### context

[`AwsLambdaContext`](AwsLambdaContext.md)

The AWS Lambda execution context.

## Returns

`Promise`\<`RawResponseType`\>

A promise resolving to the response of type `RawResponseType`.

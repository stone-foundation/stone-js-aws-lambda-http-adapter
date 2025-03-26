[**AWS Lambda HTTP Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda HTTP Adapter Documentation](../../modules.md) / [declarations](../README.md) / AwsLambdaHttpAdapterContext

# Interface: AwsLambdaHttpAdapterContext

Defined in: [aws-lambda-http-adapter/src/declarations.ts:101](https://github.com/stonemjs/aws-lambda-http-adapter/blob/266a5c901335674bf07c5995909e8ee8116e2bba/src/declarations.ts#L101)

Represents the context for the AWS Lambda HTTP Adapter.

This interface extends `AdapterContext` and includes additional properties specific
to HTTP events in AWS Lambda.

## Extends

- `AdapterContext`\<[`AwsLambdaHttpEvent`](AwsLambdaHttpEvent.md), [`RawHttpResponse`](../type-aliases/RawHttpResponse.md), [`AwsLambdaContext`](../type-aliases/AwsLambdaContext.md), `IncomingHttpEvent`, `IncomingHttpEventOptions`, `OutgoingHttpResponse`\>

## Properties

### executionContext

> `readonly` **executionContext**: [`AwsLambdaContext`](../type-aliases/AwsLambdaContext.md)

Defined in: core/dist/index.d.ts:1746

The executionContext of type ExecutionContextType.

#### Inherited from

`AdapterContext.executionContext`

***

### incomingEvent?

> `optional` **incomingEvent**: `IncomingHttpEvent`

Defined in: core/dist/index.d.ts:1750

The incomingEvent associated with the executionContext.

#### Inherited from

`AdapterContext.incomingEvent`

***

### incomingEventBuilder

> `readonly` **incomingEventBuilder**: `IAdapterEventBuilder`\<`IncomingHttpEventOptions`, `IncomingHttpEvent`\>

Defined in: core/dist/index.d.ts:1758

The incomingEventBuilder.

#### Inherited from

`AdapterContext.incomingEventBuilder`

***

### outgoingResponse?

> `optional` **outgoingResponse**: `OutgoingHttpResponse`

Defined in: core/dist/index.d.ts:1754

The outgoingResponse associated with the executionContext.

#### Inherited from

`AdapterContext.outgoingResponse`

***

### rawEvent

> `readonly` **rawEvent**: [`AwsLambdaHttpEvent`](AwsLambdaHttpEvent.md)

Defined in: core/dist/index.d.ts:1738

The rawEvent of type RawEventType.

#### Inherited from

`AdapterContext.rawEvent`

***

### rawResponse

> **rawResponse**: [`RawHttpResponseOptions`](RawHttpResponseOptions.md)

Defined in: [aws-lambda-http-adapter/src/declarations.ts:112](https://github.com/stonemjs/aws-lambda-http-adapter/blob/266a5c901335674bf07c5995909e8ee8116e2bba/src/declarations.ts#L112)

The raw HTTP response associated with the current context.

#### Overrides

`AdapterContext.rawResponse`

***

### rawResponseBuilder

> `readonly` **rawResponseBuilder**: `IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<[`RawHttpResponseOptions`](RawHttpResponseOptions.md)\>\>

Defined in: core/dist/index.d.ts:1762

The rawResponseBuilder.

#### Inherited from

`AdapterContext.rawResponseBuilder`

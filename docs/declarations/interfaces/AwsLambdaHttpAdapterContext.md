[**AWS Lambda HTTP Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda HTTP Adapter Documentation](../../modules.md) / [declarations](../README.md) / AwsLambdaHttpAdapterContext

# Interface: AwsLambdaHttpAdapterContext

Defined in: [aws-lambda-http-adapter/src/declarations.ts:101](https://github.com/stonemjs/aws-lambda-http-adapter/blob/c19fde3ee4450c0cd7d8d2aec48335308371d4de/src/declarations.ts#L101)

Represents the context for the AWS Lambda HTTP Adapter.

This interface extends `AdapterContext` and includes additional properties specific
to HTTP events in AWS Lambda.

## Extends

- `AdapterContext`\<[`AwsLambdaHttpEvent`](AwsLambdaHttpEvent.md), [`RawHttpResponse`](../type-aliases/RawHttpResponse.md), [`AwsLambdaContext`](../type-aliases/AwsLambdaContext.md), `IncomingHttpEvent`, `IncomingHttpEventOptions`, `OutgoingHttpResponse`\>

## Properties

### executionContext

> `readonly` **executionContext**: [`AwsLambdaContext`](../type-aliases/AwsLambdaContext.md)

Defined in: core/dist/index.d.ts:1607

The executionContext of type ExecutionContextType.

#### Inherited from

`AdapterContext.executionContext`

***

### incomingEvent?

> `optional` **incomingEvent**: `IncomingHttpEvent`

Defined in: core/dist/index.d.ts:1611

The incomingEvent associated with the executionContext.

#### Inherited from

`AdapterContext.incomingEvent`

***

### incomingEventBuilder

> `readonly` **incomingEventBuilder**: `IAdapterEventBuilder`\<`IncomingHttpEventOptions`, `IncomingHttpEvent`\>

Defined in: core/dist/index.d.ts:1619

The incomingEventBuilder.

#### Inherited from

`AdapterContext.incomingEventBuilder`

***

### outgoingResponse?

> `optional` **outgoingResponse**: `OutgoingHttpResponse`

Defined in: core/dist/index.d.ts:1615

The outgoingResponse associated with the executionContext.

#### Inherited from

`AdapterContext.outgoingResponse`

***

### rawEvent

> `readonly` **rawEvent**: [`AwsLambdaHttpEvent`](AwsLambdaHttpEvent.md)

Defined in: core/dist/index.d.ts:1599

The rawEvent of type RawEventType.

#### Inherited from

`AdapterContext.rawEvent`

***

### rawResponse

> **rawResponse**: [`RawHttpResponseOptions`](RawHttpResponseOptions.md)

Defined in: [aws-lambda-http-adapter/src/declarations.ts:112](https://github.com/stonemjs/aws-lambda-http-adapter/blob/c19fde3ee4450c0cd7d8d2aec48335308371d4de/src/declarations.ts#L112)

The raw HTTP response associated with the current context.

#### Overrides

`AdapterContext.rawResponse`

***

### rawResponseBuilder

> `readonly` **rawResponseBuilder**: `IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<[`RawHttpResponseOptions`](RawHttpResponseOptions.md)\>\>

Defined in: core/dist/index.d.ts:1623

The rawResponseBuilder.

#### Inherited from

`AdapterContext.rawResponseBuilder`

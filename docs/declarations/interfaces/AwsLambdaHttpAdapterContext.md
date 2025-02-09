[**AWS Lambda HTTP Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda HTTP Adapter Documentation](../../modules.md) / [declarations](../README.md) / AwsLambdaHttpAdapterContext

# Interface: AwsLambdaHttpAdapterContext

Defined in: [aws-lambda-http-adapter/src/declarations.ts:101](https://github.com/stonemjs/aws-lambda-http-adapter/blob/b2e29f567ac56717023f9597000ee3f0d0278093/src/declarations.ts#L101)

Represents the context for the AWS Lambda HTTP Adapter.

This interface extends `AdapterContext` and includes additional properties specific
to HTTP events in AWS Lambda.

## Extends

- `AdapterContext`\<[`AwsLambdaHttpEvent`](AwsLambdaHttpEvent.md), [`RawHttpResponse`](../type-aliases/RawHttpResponse.md), [`AwsLambdaContext`](../type-aliases/AwsLambdaContext.md), `IncomingHttpEvent`, `IncomingHttpEventOptions`, `OutgoingHttpResponse`\>

## Properties

### executionContext

> `readonly` **executionContext**: [`AwsLambdaContext`](../type-aliases/AwsLambdaContext.md)

Defined in: core/dist/index.d.ts:1596

The executionContext of type ExecutionContextType.

#### Inherited from

`AdapterContext.executionContext`

***

### incomingEvent?

> `optional` **incomingEvent**: `IncomingHttpEvent`

Defined in: core/dist/index.d.ts:1600

The incomingEvent associated with the executionContext.

#### Inherited from

`AdapterContext.incomingEvent`

***

### incomingEventBuilder

> `readonly` **incomingEventBuilder**: `IAdapterEventBuilder`\<`IncomingHttpEventOptions`, `IncomingHttpEvent`\>

Defined in: core/dist/index.d.ts:1608

The incomingEventBuilder.

#### Inherited from

`AdapterContext.incomingEventBuilder`

***

### outgoingResponse?

> `optional` **outgoingResponse**: `OutgoingHttpResponse`

Defined in: core/dist/index.d.ts:1604

The outgoingResponse associated with the executionContext.

#### Inherited from

`AdapterContext.outgoingResponse`

***

### rawEvent

> `readonly` **rawEvent**: [`AwsLambdaHttpEvent`](AwsLambdaHttpEvent.md)

Defined in: core/dist/index.d.ts:1588

The rawEvent of type RawEventType.

#### Inherited from

`AdapterContext.rawEvent`

***

### rawResponse

> **rawResponse**: [`RawHttpResponseOptions`](RawHttpResponseOptions.md)

Defined in: [aws-lambda-http-adapter/src/declarations.ts:112](https://github.com/stonemjs/aws-lambda-http-adapter/blob/b2e29f567ac56717023f9597000ee3f0d0278093/src/declarations.ts#L112)

The raw HTTP response associated with the current context.

#### Overrides

`AdapterContext.rawResponse`

***

### rawResponseBuilder

> `readonly` **rawResponseBuilder**: `IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<[`RawHttpResponseOptions`](RawHttpResponseOptions.md)\>\>

Defined in: core/dist/index.d.ts:1612

The rawResponseBuilder.

#### Inherited from

`AdapterContext.rawResponseBuilder`

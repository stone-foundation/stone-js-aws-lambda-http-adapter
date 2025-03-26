[**AWS Lambda HTTP Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda HTTP Adapter Documentation](../../../modules.md) / [decorators/AwsLambdaHttp](../README.md) / AwsLambdaHttpOptions

# Interface: AwsLambdaHttpOptions

Defined in: [aws-lambda-http-adapter/src/decorators/AwsLambdaHttp.ts:9](https://github.com/stonemjs/aws-lambda-http-adapter/blob/266a5c901335674bf07c5995909e8ee8116e2bba/src/decorators/AwsLambdaHttp.ts#L9)

Configuration options for the `AwsLambdaHttp` decorator.
These options extend the default AWS Lambda HTTP adapter configuration.

## Extends

- `Partial`\<[`AwsLambdaHttpAdapterAdapterConfig`](../../../options/AwsLambdaHttpAdapterBlueprint/interfaces/AwsLambdaHttpAdapterAdapterConfig.md)\>

## Properties

### alias?

> `optional` **alias**: `string`

Defined in: core/dist/index.d.ts:447

The alias name for the adapter.
This is a unique identifier used to reference the adapter.
Optional property.

#### Inherited from

`Partial.alias`

***

### current?

> `optional` **current**: `boolean`

Defined in: core/dist/index.d.ts:453

The current status identifier for the adapter.
Used to indicate if this adapter instance is active or currently in use.
Optional property.

#### Inherited from

`Partial.current`

***

### default?

> `optional` **default**: `boolean`

Defined in: core/dist/index.d.ts:458

Defines whether this adapter is the default adapter used by the application.
Optional property.

#### Inherited from

`Partial.default`

***

### errorHandlers?

> `optional` **errorHandlers**: `Record`\<`string`, `MetaAdapterErrorHandler`\<[`AwsLambdaHttpEvent`](../../../declarations/interfaces/AwsLambdaHttpEvent.md), [`RawHttpResponseOptions`](../../../declarations/interfaces/RawHttpResponseOptions.md), [`AwsLambdaContext`](../../../declarations/type-aliases/AwsLambdaContext.md)\>\>

Defined in: core/dist/index.d.ts:441

Error handlers used to manage and report errors that occur within the adapter.
These handlers can be used to customize error handling behavior and logging.

#### Inherited from

`Partial.errorHandlers`

***

### eventHandlerResolver?

> `optional` **eventHandlerResolver**: `AdapterEventHandlerResolver`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

Defined in: core/dist/index.d.ts:436

The event handler resolver used to create instances of the event handler.

#### Inherited from

`Partial.eventHandlerResolver`

***

### middleware?

> `optional` **middleware**: `AdapterMixedPipeType`\<`AdapterContext`\<[`AwsLambdaHttpEvent`](../../../declarations/interfaces/AwsLambdaHttpEvent.md), [`RawHttpResponseOptions`](../../../declarations/interfaces/RawHttpResponseOptions.md), [`AwsLambdaContext`](../../../declarations/type-aliases/AwsLambdaContext.md), `IncomingHttpEvent`, `IncomingHttpEventOptions`, `OutgoingHttpResponse`\>, [`RawHttpResponseOptions`](../../../declarations/interfaces/RawHttpResponseOptions.md)\>[]

Defined in: core/dist/index.d.ts:432

The middleware used for processing incoming or outgoing data in the adapter.
Middleware can modify or handle events at different stages of the adapter's lifecycle.

#### Inherited from

`Partial.middleware`

***

### platform?

> `optional` **platform**: `string`

Defined in: core/dist/index.d.ts:423

The platform identifier for the adapter.
This is used to categorize the adapter based on the environment or technology it supports.

#### Inherited from

`Partial.platform`

***

### resolver?

> `optional` **resolver**: `AdapterResolver`

Defined in: core/dist/index.d.ts:427

The class type resolver used to create instances of the adapter.

#### Inherited from

`Partial.resolver`

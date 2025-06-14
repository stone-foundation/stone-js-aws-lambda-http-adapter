[**AWS Lambda HTTP Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda HTTP Adapter Documentation](../../../modules.md) / [options/AwsLambdaHttpAdapterBlueprint](../README.md) / AwsLambdaHttpAdapterAdapterConfig

# Interface: AwsLambdaHttpAdapterAdapterConfig

Defined in: [aws-lambda-http-adapter/src/options/AwsLambdaHttpAdapterBlueprint.ts:19](https://github.com/stonemjs/aws-lambda-http-adapter/blob/2fb8e4d048853c60484edbc94c3249aefb421def/src/options/AwsLambdaHttpAdapterBlueprint.ts#L19)

Configuration interface for the AWS Lambda Http Adapter.

Extends the `AdapterConfig` interface from the Stone.js framework and provides
customizable options specific to the AWS Lambda platform. This includes
alias, resolver, middleware, hooks, and various adapter state flags.

## Extends

- `AdapterConfig`\<[`AwsLambdaHttpEvent`](../../../declarations/interfaces/AwsLambdaHttpEvent.md), [`RawHttpResponse`](../../../declarations/type-aliases/RawHttpResponse.md), [`AwsLambdaContext`](../../../declarations/type-aliases/AwsLambdaContext.md), `IncomingHttpEvent`, `IncomingHttpEventOptions`, `OutgoingHttpResponse`\>

## Properties

### alias?

> `optional` **alias**: `string`

Defined in: core/dist/index.d.ts:455

The alias name for the adapter.
This is a unique identifier used to reference the adapter.
Optional property.

#### Inherited from

`AdapterConfig.alias`

***

### current?

> `optional` **current**: `boolean`

Defined in: core/dist/index.d.ts:461

The current status identifier for the adapter.
Used to indicate if this adapter instance is active or currently in use.
Optional property.

#### Inherited from

`AdapterConfig.current`

***

### default?

> `optional` **default**: `boolean`

Defined in: core/dist/index.d.ts:466

Defines whether this adapter is the default adapter used by the application.
Optional property.

#### Inherited from

`AdapterConfig.default`

***

### errorHandlers

> **errorHandlers**: `Record`\<`string`, `MetaAdapterErrorHandler`\<[`AwsLambdaHttpEvent`](../../../declarations/interfaces/AwsLambdaHttpEvent.md), [`RawHttpResponseOptions`](../../../declarations/interfaces/RawHttpResponseOptions.md), [`AwsLambdaContext`](../../../declarations/type-aliases/AwsLambdaContext.md)\>\>

Defined in: core/dist/index.d.ts:449

Error handlers used to manage and report errors that occur within the adapter.
These handlers can be used to customize error handling behavior and logging.

#### Inherited from

`AdapterConfig.errorHandlers`

***

### eventHandlerResolver

> **eventHandlerResolver**: `AdapterEventHandlerResolver`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

Defined in: core/dist/index.d.ts:444

The event handler resolver used to create instances of the event handler.

#### Inherited from

`AdapterConfig.eventHandlerResolver`

***

### middleware

> **middleware**: `AdapterMixedPipeType`\<`AdapterContext`\<[`AwsLambdaHttpEvent`](../../../declarations/interfaces/AwsLambdaHttpEvent.md), [`RawHttpResponseOptions`](../../../declarations/interfaces/RawHttpResponseOptions.md), [`AwsLambdaContext`](../../../declarations/type-aliases/AwsLambdaContext.md), `IncomingHttpEvent`, `IncomingHttpEventOptions`, `OutgoingHttpResponse`\>, [`RawHttpResponseOptions`](../../../declarations/interfaces/RawHttpResponseOptions.md)\>[]

Defined in: core/dist/index.d.ts:440

The middleware used for processing incoming or outgoing data in the adapter.
Middleware can modify or handle events at different stages of the adapter's lifecycle.

#### Inherited from

`AdapterConfig.middleware`

***

### platform

> **platform**: `string`

Defined in: core/dist/index.d.ts:431

The platform identifier for the adapter.
This is used to categorize the adapter based on the environment or technology it supports.

#### Inherited from

`AdapterConfig.platform`

***

### resolver

> **resolver**: `AdapterResolver`

Defined in: core/dist/index.d.ts:435

The class type resolver used to create instances of the adapter.

#### Inherited from

`AdapterConfig.resolver`

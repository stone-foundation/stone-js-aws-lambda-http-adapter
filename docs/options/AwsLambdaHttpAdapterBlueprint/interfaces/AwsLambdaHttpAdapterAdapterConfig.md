[**AWS Lambda HTTP Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda HTTP Adapter Documentation](../../../modules.md) / [options/AwsLambdaHttpAdapterBlueprint](../README.md) / AwsLambdaHttpAdapterAdapterConfig

# Interface: AwsLambdaHttpAdapterAdapterConfig

Defined in: [aws-lambda-http-adapter/src/options/AwsLambdaHttpAdapterBlueprint.ts:17](https://github.com/stonemjs/aws-lambda-http-adapter/blob/c19fde3ee4450c0cd7d8d2aec48335308371d4de/src/options/AwsLambdaHttpAdapterBlueprint.ts#L17)

Configuration interface for the AWS Lambda Http Adapter.

Extends the `AdapterConfig` interface from the Stone.js framework and provides
customizable options specific to the AWS Lambda platform. This includes
alias, resolver, middleware, hooks, and various adapter state flags.

## Extends

- `AdapterConfig`

## Properties

### alias?

> `optional` **alias**: `string`

Defined in: core/dist/index.d.ts:430

The alias name for the adapter.
This is a unique identifier used to reference the adapter.
Optional property.

#### Inherited from

`AdapterConfig.alias`

***

### current?

> `optional` **current**: `boolean`

Defined in: core/dist/index.d.ts:436

The current status identifier for the adapter.
Used to indicate if this adapter instance is active or currently in use.
Optional property.

#### Inherited from

`AdapterConfig.current`

***

### default?

> `optional` **default**: `boolean`

Defined in: core/dist/index.d.ts:441

Defines whether this adapter is the default adapter used by the application.
Optional property.

#### Inherited from

`AdapterConfig.default`

***

### errorHandlers

> **errorHandlers**: `Record`\<`string`, `MetaAdapterErrorHandler`\>

Defined in: core/dist/index.d.ts:419

Error handlers used to manage and report errors that occur within the adapter.
These handlers can be used to customize error handling behavior and logging.

#### Inherited from

`AdapterConfig.errorHandlers`

***

### hooks?

> `optional` **hooks**: `AdapterHooks`

Defined in: core/dist/index.d.ts:424

Hooks that provide additional behavior during specific lifecycle events of the adapter.
These hooks can be used to extend the adapter's functionality at various points.

#### Inherited from

`AdapterConfig.hooks`

***

### middleware

> **middleware**: `MixedPipe`\<`any`, `any`\>[]

Defined in: core/dist/index.d.ts:414

The middleware used for processing incoming or outgoing data in the adapter.
Middleware can modify or handle events at different stages of the adapter's lifecycle.

#### Inherited from

`AdapterConfig.middleware`

***

### platform

> **platform**: `string`

Defined in: core/dist/index.d.ts:405

The platform identifier for the adapter.
This is used to categorize the adapter based on the environment or technology it supports.

#### Inherited from

`AdapterConfig.platform`

***

### resolver

> **resolver**: `AdapterResolver`

Defined in: core/dist/index.d.ts:409

The class type resolver used to create instances of the adapter.

#### Inherited from

`AdapterConfig.resolver`

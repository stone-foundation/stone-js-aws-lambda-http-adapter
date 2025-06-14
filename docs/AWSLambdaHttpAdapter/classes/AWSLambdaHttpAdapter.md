[**AWS Lambda HTTP Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda HTTP Adapter Documentation](../../modules.md) / [AwsLambdaHttpAdapter](../README.md) / AwsLambdaHttpAdapter

# Class: AwsLambdaHttpAdapter

Defined in: aws-lambda-http-adapter/src/AwsLambdaHttpAdapter.ts:49

AWS Lambda HTTP Adapter for Stone.js.

The `AwsLambdaHttpAdapter` extends the functionality of the Stone.js `Adapter`
to provide seamless integration with AWS Lambda for HTTP-based events. This adapter
transforms incoming HTTP events from AWS Lambda into `IncomingHttpEvent` instances
and produces a `RawHttpResponse` as output.

This adapter simplifies the process of handling HTTP events within AWS Lambda
while adhering to the Stone.js framework's event-driven architecture.

## Template

The type of the raw HTTP event from AWS Lambda.

## Template

The type of the raw HTTP response to send back.

## Template

The AWS Lambda execution context type.

## Template

The type of the processed incoming HTTP event.

## Template

Options used to create an incoming HTTP event.

## Template

The type of the outgoing HTTP response after processing.

## Template

Context type specific to the HTTP adapter.

## Example

```typescript
import { AwsLambdaHttpAdapter } from '@stone-js/aws-lambda-http-adapter';

const adapter = AwsLambdaHttpAdapter.create({...});

const handler = await adapter.run();

export { handler };
```

## See

 - [Stone.js Documentation](https://stone-js.com/docs)
 - [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/latest/dg/)

## Extends

- `Adapter`\<[`AwsLambdaHttpEvent`](../../declarations/interfaces/AwsLambdaHttpEvent.md), [`RawHttpResponse`](../../declarations/type-aliases/RawHttpResponse.md), [`AwsLambdaContext`](../../declarations/type-aliases/AwsLambdaContext.md), `IncomingHttpEvent`, `IncomingHttpEventOptions`, `OutgoingHttpResponse`, [`AwsLambdaHttpAdapterContext`](../../declarations/interfaces/AwsLambdaHttpAdapterContext.md)\>

## Constructors

### new AwsLambdaHttpAdapter()

> `protected` **new AwsLambdaHttpAdapter**(`blueprint`): [`AwsLambdaHttpAdapter`](AwsLambdaHttpAdapter.md)

Defined in: core/dist/index.d.ts:2853

Create an Adapter.

#### Parameters

##### blueprint

`IBlueprint`\<`any`\>

The blueprint to create the adapter.

#### Returns

[`AwsLambdaHttpAdapter`](AwsLambdaHttpAdapter.md)

#### Inherited from

`Adapter< AwsLambdaHttpEvent, RawHttpResponse, AwsLambdaContext, IncomingHttpEvent, IncomingHttpEventOptions, OutgoingHttpResponse, AwsLambdaHttpAdapterContext >.constructor`

## Properties

### blueprint

> `protected` `readonly` **blueprint**: `IBlueprint`\<`any`\>

Defined in: core/dist/index.d.ts:2844

#### Inherited from

`Adapter.blueprint`

***

### hooks

> `protected` `readonly` **hooks**: `AdapterHookType`\<[`AwsLambdaHttpAdapterContext`](../../declarations/interfaces/AwsLambdaHttpAdapterContext.md), [`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\>

Defined in: core/dist/index.d.ts:2845

#### Inherited from

`Adapter.hooks`

***

### middleware

> `protected` `readonly` **middleware**: `AdapterMixedPipeType`\<[`AwsLambdaHttpAdapterContext`](../../declarations/interfaces/AwsLambdaHttpAdapterContext.md), [`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\>[]

Defined in: core/dist/index.d.ts:2846

#### Inherited from

`Adapter.middleware`

***

### resolvedErrorHandlers

> `protected` `readonly` **resolvedErrorHandlers**: `Record`\<`string`, `IAdapterErrorHandler`\<[`AwsLambdaHttpEvent`](../../declarations/interfaces/AwsLambdaHttpEvent.md), [`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md), [`AwsLambdaContext`](../../declarations/type-aliases/AwsLambdaContext.md)\>\>

Defined in: core/dist/index.d.ts:2847

#### Inherited from

`Adapter.resolvedErrorHandlers`

## Methods

### buildRawResponse()

> `protected` **buildRawResponse**(`context`, `eventHandler`?): `Promise`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\>

Defined in: core/dist/index.d.ts:2907

Build the raw response.

#### Parameters

##### context

[`AwsLambdaHttpAdapterContext`](../../declarations/interfaces/AwsLambdaHttpAdapterContext.md)

The event context.

##### eventHandler?

`AdapterEventHandlerType`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

The event handler to be run.

#### Returns

`Promise`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\>

The raw response wrapper.

#### Inherited from

`Adapter.buildRawResponse`

***

### eventListener()

> `protected` **eventListener**(`rawEvent`, `executionContext`): `Promise`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\>

Defined in: aws-lambda-http-adapter/src/AwsLambdaHttpAdapter.ts:123

Processes an incoming AWS Lambda HTTP event.

Converts a raw AWS Lambda HTTP event into an `IncomingHttpEvent`, processes it through
the Stone.js pipeline, and generates a `RawHttpResponse` to send back.

#### Parameters

##### rawEvent

[`AwsLambdaHttpEvent`](../../declarations/interfaces/AwsLambdaHttpEvent.md)

The raw HTTP event received from AWS Lambda.

##### executionContext

[`AwsLambdaContext`](../../declarations/type-aliases/AwsLambdaContext.md)

The AWS Lambda execution context associated with the event.

#### Returns

`Promise`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\>

A promise resolving to the processed `RawHttpResponse`.

***

### executeEventHandlerHooks()

> `protected` **executeEventHandlerHooks**(`hook`, `eventHandler`): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2935

Execute the event handler lifecycle hooks.

#### Parameters

##### hook

`KernelHookName`

The hook to execute.

##### eventHandler

`AdapterEventHandlerType`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

The event handler to be run.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.executeEventHandlerHooks`

***

### executeHooks()

> `protected` **executeHooks**(`name`, `context`?, `error`?): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2943

Execute adapter lifecycle hooks.

#### Parameters

##### name

`AdapterHookName`

The hook's name.

##### context?

[`AwsLambdaHttpAdapterContext`](../../declarations/interfaces/AwsLambdaHttpAdapterContext.md)

The event context.

##### error?

`any`

The error to handle.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.executeHooks`

***

### handleError()

> `protected` **handleError**(`error`, `context`): `Promise`\<`AdapterEventBuilderType`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\>\>

Defined in: core/dist/index.d.ts:2899

Handle error.

#### Parameters

##### error

`Error`

The error to handle.

##### context

[`AwsLambdaHttpAdapterContext`](../../declarations/interfaces/AwsLambdaHttpAdapterContext.md)

The event context.

#### Returns

`Promise`\<`AdapterEventBuilderType`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\>\>

The raw response.

#### Inherited from

`Adapter.handleError`

***

### handleEvent()

> `protected` **handleEvent**(`context`, `eventHandler`): `Promise`\<`IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\>\>\>

Defined in: core/dist/index.d.ts:2891

Handle the event.

#### Parameters

##### context

[`AwsLambdaHttpAdapterContext`](../../declarations/interfaces/AwsLambdaHttpAdapterContext.md)

The event context.

##### eventHandler

`AdapterEventHandlerType`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

The event handler to be run.

#### Returns

`Promise`\<`IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\>\>\>

The raw response wrapper.

#### Inherited from

`Adapter.handleEvent`

***

### makePipelineOptions()

> `protected` **makePipelineOptions**(): `PipelineOptions`\<[`AwsLambdaHttpAdapterContext`](../../declarations/interfaces/AwsLambdaHttpAdapterContext.md), `AdapterEventBuilderType`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\>\>

Defined in: core/dist/index.d.ts:2913

Create pipeline options for the Adapter.

#### Returns

`PipelineOptions`\<[`AwsLambdaHttpAdapterContext`](../../declarations/interfaces/AwsLambdaHttpAdapterContext.md), `AdapterEventBuilderType`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\>\>

The pipeline options for transforming the event.

#### Inherited from

`Adapter.makePipelineOptions`

***

### onStart()

> `protected` **onStart**(): `Promise`\<`void`\>

Defined in: aws-lambda-http-adapter/src/AwsLambdaHttpAdapter.ts:103

Initializes the adapter and validates its execution context.

Ensures that the adapter is running in an AWS Lambda environment. Throws an error
if it detects that the adapter is being used in an unsupported environment (e.g., a browser).

#### Returns

`Promise`\<`void`\>

#### Throws

If executed outside an AWS Lambda environment.

***

### resolveErrorHandler()

> `protected` **resolveErrorHandler**(`error`): `IAdapterErrorHandler`\<[`AwsLambdaHttpEvent`](../../declarations/interfaces/AwsLambdaHttpEvent.md), [`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md), [`AwsLambdaContext`](../../declarations/type-aliases/AwsLambdaContext.md)\>

Defined in: core/dist/index.d.ts:2928

Get the error handler for the given error.

#### Parameters

##### error

`Error`

The error to get the handler for.

#### Returns

`IAdapterErrorHandler`\<[`AwsLambdaHttpEvent`](../../declarations/interfaces/AwsLambdaHttpEvent.md), [`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md), [`AwsLambdaContext`](../../declarations/type-aliases/AwsLambdaContext.md)\>

The error handler.

#### Throws

IntegrationError

#### Inherited from

`Adapter.resolveErrorHandler`

***

### resolveEventHandler()

> `protected` **resolveEventHandler**(): `AdapterEventHandlerType`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

Defined in: core/dist/index.d.ts:2920

Get the event handler for the adapter.

#### Returns

`AdapterEventHandlerType`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

The event handler for the adapter.

#### Throws

If the event handler is missing.

#### Inherited from

`Adapter.resolveEventHandler`

***

### run()

> **run**\<`ExecutionResultType`\>(): `Promise`\<`ExecutionResultType`\>

Defined in: aws-lambda-http-adapter/src/AwsLambdaHttpAdapter.ts:85

Executes the adapter and provides an AWS Lambda-compatible HTTP handler function.

This method initializes the adapter and returns a handler function that can
process HTTP events in AWS Lambda. It transforms raw events into `IncomingHttpEvent`
instances and produces `RawHttpResponse` objects as output.

#### Type Parameters

• **ExecutionResultType** = [`AwsLambdaEventHandlerFunction`](../../declarations/type-aliases/AwsLambdaEventHandlerFunction.md)\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\>

The type representing the AWS Lambda event handler function.

#### Returns

`Promise`\<`ExecutionResultType`\>

A promise resolving to the AWS Lambda HTTP handler function.

#### Throws

If used outside the AWS Lambda environment.

#### Overrides

`Adapter.run`

***

### sendEventThroughDestination()

> `protected` **sendEventThroughDestination**(`context`, `eventHandler`): `Promise`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\>

Defined in: core/dist/index.d.ts:2883

Send the raw event through the destination.

#### Parameters

##### context

[`AwsLambdaHttpAdapterContext`](../../declarations/interfaces/AwsLambdaHttpAdapterContext.md)

The event context.

##### eventHandler

`AdapterEventHandlerType`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

The event handler to be run.

#### Returns

`Promise`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\>

Platform-specific response.

#### Throws

IntegrationError

#### Inherited from

`Adapter.sendEventThroughDestination`

***

### validateContextAndEventHandler()

> `protected` **validateContextAndEventHandler**(`context`, `eventHandler`): `void`

Defined in: core/dist/index.d.ts:2951

Validate the context and event handler.

#### Parameters

##### context

[`AwsLambdaHttpAdapterContext`](../../declarations/interfaces/AwsLambdaHttpAdapterContext.md)

The context to validate.

##### eventHandler

`AdapterEventHandlerType`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

The event handler to validate.

#### Returns

`void`

#### Throws

IntegrationError

#### Inherited from

`Adapter.validateContextAndEventHandler`

***

### create()

> `static` **create**(`blueprint`): [`AwsLambdaHttpAdapter`](AwsLambdaHttpAdapter.md)

Defined in: aws-lambda-http-adapter/src/AwsLambdaHttpAdapter.ts:70

Creates an instance of the `AwsLambdaHttpAdapter`.

#### Parameters

##### blueprint

`IBlueprint`

The application blueprint.

#### Returns

[`AwsLambdaHttpAdapter`](AwsLambdaHttpAdapter.md)

A new instance of `AwsLambdaHttpAdapter`.

#### Example

```typescript
const adapter = AwsLambdaHttpAdapter.create(blueprint);
await adapter.run();
```

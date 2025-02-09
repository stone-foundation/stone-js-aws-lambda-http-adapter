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

> `protected` **new AwsLambdaHttpAdapter**(`options`): [`AwsLambdaHttpAdapter`](AwsLambdaHttpAdapter.md)

Defined in: core/dist/index.d.ts:2631

Create an Adapter.

#### Parameters

##### options

`AdapterOptions`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

Adapter options.

#### Returns

[`AwsLambdaHttpAdapter`](AwsLambdaHttpAdapter.md)

#### Inherited from

`Adapter< AwsLambdaHttpEvent, RawHttpResponse, AwsLambdaContext, IncomingHttpEvent, IncomingHttpEventOptions, OutgoingHttpResponse, AwsLambdaHttpAdapterContext >.constructor`

## Properties

### blueprint

> `protected` `readonly` **blueprint**: `IBlueprint`\<`any`\>

Defined in: core/dist/index.d.ts:2623

#### Inherited from

`Adapter.blueprint`

***

### handlerResolver

> `protected` `readonly` **handlerResolver**: `AdapterEventHandlerResolver`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

Defined in: core/dist/index.d.ts:2624

#### Inherited from

`Adapter.handlerResolver`

***

### hooks

> `protected` `readonly` **hooks**: `AdapterHooks`

Defined in: core/dist/index.d.ts:2622

#### Inherited from

`Adapter.hooks`

***

### logger

> `protected` `readonly` **logger**: `ILogger`

Defined in: core/dist/index.d.ts:2621

#### Inherited from

`Adapter.logger`

## Methods

### afterHandle()

> `protected` **afterHandle**(`eventHandler`, `context`): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2681

Hook that runs after handling each event.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

Action handler to be run.

##### context

[`AwsLambdaHttpAdapterContext`](../../declarations/interfaces/AwsLambdaHttpAdapterContext.md)

The event context.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.afterHandle`

***

### beforeHandle()

> `protected` **beforeHandle**(`eventHandler`): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2674

Hook that runs before handling each event.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

Action handler to be run.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.beforeHandle`

***

### eventListener()

> `protected` **eventListener**(`rawEvent`, `executionContext`): `Promise`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\>

Defined in: aws-lambda-http-adapter/src/AwsLambdaHttpAdapter.ts:120

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

### executeHooks()

> `protected` **executeHooks**(`hook`, `context`?): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2695

Execute lifecycle hooks.

#### Parameters

##### hook

keyof `AdapterHooks`

The hook to execute.

##### context?

[`AwsLambdaHttpAdapterContext`](../../declarations/interfaces/AwsLambdaHttpAdapterContext.md)

The event context.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.executeHooks`

***

### makePipelineOptions()

> `protected` **makePipelineOptions**(): `PipelineOptions`\<[`AwsLambdaHttpAdapterContext`](../../declarations/interfaces/AwsLambdaHttpAdapterContext.md), `IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\>\>\>

Defined in: core/dist/index.d.ts:2701

Create pipeline options for the Adapter.

#### Returns

`PipelineOptions`\<[`AwsLambdaHttpAdapterContext`](../../declarations/interfaces/AwsLambdaHttpAdapterContext.md), `IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\>\>\>

The pipeline options for transforming the event.

#### Inherited from

`Adapter.makePipelineOptions`

***

### onInit()

> `protected` **onInit**(): `Promise`\<`void`\>

Defined in: aws-lambda-http-adapter/src/AwsLambdaHttpAdapter.ts:100

Initializes the adapter and validates its execution context.

Ensures that the adapter is running in an AWS Lambda environment. Throws an error
if it detects that the adapter is being used in an unsupported environment (e.g., a browser).

#### Returns

`Promise`\<`void`\>

#### Throws

If executed outside an AWS Lambda environment.

#### Overrides

`Adapter.onInit`

***

### onPrepare()

> `protected` **onPrepare**(`eventHandler`): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2668

Hook that runs before preparing the event context.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

Action handler to be run.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.onPrepare`

***

### onTerminate()

> `protected` **onTerminate**(`eventHandler`, `context`): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2688

Hook that runs after running the action handler.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

Action handler to be run.

##### context

[`AwsLambdaHttpAdapterContext`](../../declarations/interfaces/AwsLambdaHttpAdapterContext.md)

The event context.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.onTerminate`

***

### prepareResponse()

> `protected` **prepareResponse**(`eventHandler`, `context`): `Promise`\<`IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\>\>\>

Defined in: core/dist/index.d.ts:2716

Prepare the response for the event handler.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

The event handler to prepare the response for.

##### context

[`AwsLambdaHttpAdapterContext`](../../declarations/interfaces/AwsLambdaHttpAdapterContext.md)

The event context.

#### Returns

`Promise`\<`IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\>\>\>

The raw response wrapper.

#### Inherited from

`Adapter.prepareResponse`

***

### resolveErrorHandler()

> `protected` **resolveErrorHandler**(`error`): `IAdapterErrorHandler`\<[`AwsLambdaHttpEvent`](../../declarations/interfaces/AwsLambdaHttpEvent.md), [`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md), [`AwsLambdaContext`](../../declarations/type-aliases/AwsLambdaContext.md)\>

Defined in: core/dist/index.d.ts:2708

Get the error handler for the given error.

#### Parameters

##### error

`Error`

The error to get the handler for.

#### Returns

`IAdapterErrorHandler`\<[`AwsLambdaHttpEvent`](../../declarations/interfaces/AwsLambdaHttpEvent.md), [`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md), [`AwsLambdaContext`](../../declarations/type-aliases/AwsLambdaContext.md)\>

The error handler.

#### Inherited from

`Adapter.resolveErrorHandler`

***

### run()

> **run**\<`ExecutionResultType`\>(): `Promise`\<`ExecutionResultType`\>

Defined in: aws-lambda-http-adapter/src/AwsLambdaHttpAdapter.ts:82

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

> `protected` **sendEventThroughDestination**(`eventHandler`, `context`): `Promise`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\>

Defined in: core/dist/index.d.ts:2658

Incoming message listener.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

##### context

[`AwsLambdaHttpAdapterContext`](../../declarations/interfaces/AwsLambdaHttpAdapterContext.md)

The event context.

#### Returns

`Promise`\<[`RawHttpResponseOptions`](../../declarations/interfaces/RawHttpResponseOptions.md)\>

Platform-specific output.

#### Inherited from

`Adapter.sendEventThroughDestination`

***

### create()

> `static` **create**(`options`): [`AwsLambdaHttpAdapter`](AwsLambdaHttpAdapter.md)

Defined in: aws-lambda-http-adapter/src/AwsLambdaHttpAdapter.ts:67

Creates an instance of the `AwsLambdaHttpAdapter`.

This factory method initializes the adapter with the specified configuration options.

#### Parameters

##### options

`AdapterOptions`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

Configuration options for the adapter, including the handler resolver
                 and error handling mechanisms.

#### Returns

[`AwsLambdaHttpAdapter`](AwsLambdaHttpAdapter.md)

A new instance of `AwsLambdaHttpAdapter`.

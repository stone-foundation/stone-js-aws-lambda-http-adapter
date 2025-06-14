[**AWS Lambda HTTP Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda HTTP Adapter Documentation](../../../modules.md) / [errors/AwsLambdaHttpAdapterError](../README.md) / AwsLambdaHttpAdapterError

# Class: AwsLambdaHttpAdapterError

Defined in: [aws-lambda-http-adapter/src/errors/AwsLambdaHttpAdapterError.ts:6](https://github.com/stonemjs/aws-lambda-http-adapter/blob/2fb8e4d048853c60484edbc94c3249aefb421def/src/errors/AwsLambdaHttpAdapterError.ts#L6)

Custom error for AWS Lambda adapter operations.

## Extends

- `IntegrationError`

## Constructors

### new AwsLambdaHttpAdapterError()

> **new AwsLambdaHttpAdapterError**(`message`, `options`?): [`AwsLambdaHttpAdapterError`](AwsLambdaHttpAdapterError.md)

Defined in: [aws-lambda-http-adapter/src/errors/AwsLambdaHttpAdapterError.ts:7](https://github.com/stonemjs/aws-lambda-http-adapter/blob/2fb8e4d048853c60484edbc94c3249aefb421def/src/errors/AwsLambdaHttpAdapterError.ts#L7)

#### Parameters

##### message

`string`

##### options?

`ErrorOptions`

#### Returns

[`AwsLambdaHttpAdapterError`](AwsLambdaHttpAdapterError.md)

#### Overrides

`IntegrationError.constructor`

## Properties

### cause?

> `readonly` `optional` **cause**: `Error`

Defined in: core/dist/index.d.ts:3343

#### Inherited from

`IntegrationError.cause`

***

### code?

> `readonly` `optional` **code**: `string`

Defined in: core/dist/index.d.ts:3342

#### Inherited from

`IntegrationError.code`

***

### metadata?

> `readonly` `optional` **metadata**: `unknown`

Defined in: core/dist/index.d.ts:3344

#### Inherited from

`IntegrationError.metadata`

## Methods

### toString()

> **toString**(`multiline`?): `string`

Defined in: core/dist/index.d.ts:3365

Converts the error to a formatted string representation.

#### Parameters

##### multiline?

`boolean`

Determine if output value must be multiline or not.

#### Returns

`string`

A formatted error string.

#### Inherited from

`IntegrationError.toString`

***

### create()

> `static` **create**\<`T`\>(`message`, `options`?): `T`

Defined in: core/dist/index.d.ts:3351

Create a RuntimeError.

#### Type Parameters

• **T** *extends* `RuntimeError` = `RuntimeError`

#### Parameters

##### message

`string`

##### options?

`ErrorOptions`

The options to create a RuntimeError.

#### Returns

`T`

A new RuntimeError instance.

#### Inherited from

`IntegrationError.create`

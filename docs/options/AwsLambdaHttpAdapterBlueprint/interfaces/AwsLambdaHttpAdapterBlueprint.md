[**AWS Lambda HTTP Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda HTTP Adapter Documentation](../../../modules.md) / [options/AwsLambdaHttpAdapterBlueprint](../README.md) / AwsLambdaHttpAdapterBlueprint

# Interface: AwsLambdaHttpAdapterBlueprint

Defined in: [aws-lambda-http-adapter/src/options/AwsLambdaHttpAdapterBlueprint.ts:33](https://github.com/stonemjs/aws-lambda-http-adapter/blob/c19fde3ee4450c0cd7d8d2aec48335308371d4de/src/options/AwsLambdaHttpAdapterBlueprint.ts#L33)

Blueprint interface for the AWS Lambda Http Adapter.

This interface extends `StoneBlueprint` and defines the structure of the
AWS Lambda Http adapter blueprint used in the Stone.js framework. It includes
a `stone` object with an array of `AwsLambdaHttpAdapterConfig` items.

## Extends

- `StoneBlueprint`\<`IncomingHttpEvent`, `OutgoingHttpResponse`\>

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### stone

> **stone**: [`AwsLambdaHttpAdapterConfig`](AwsLambdaHttpAdapterConfig.md)

Defined in: [aws-lambda-http-adapter/src/options/AwsLambdaHttpAdapterBlueprint.ts:37](https://github.com/stonemjs/aws-lambda-http-adapter/blob/c19fde3ee4450c0cd7d8d2aec48335308371d4de/src/options/AwsLambdaHttpAdapterBlueprint.ts#L37)

Application-level settings, including environment, middleware, logging, and service registration.

#### Overrides

`StoneBlueprint.stone`

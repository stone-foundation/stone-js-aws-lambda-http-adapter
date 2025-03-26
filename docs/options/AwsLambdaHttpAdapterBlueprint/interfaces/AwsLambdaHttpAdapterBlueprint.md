[**AWS Lambda HTTP Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda HTTP Adapter Documentation](../../../modules.md) / [options/AwsLambdaHttpAdapterBlueprint](../README.md) / AwsLambdaHttpAdapterBlueprint

# Interface: AwsLambdaHttpAdapterBlueprint

Defined in: [aws-lambda-http-adapter/src/options/AwsLambdaHttpAdapterBlueprint.ts:41](https://github.com/stonemjs/aws-lambda-http-adapter/blob/266a5c901335674bf07c5995909e8ee8116e2bba/src/options/AwsLambdaHttpAdapterBlueprint.ts#L41)

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

Defined in: [aws-lambda-http-adapter/src/options/AwsLambdaHttpAdapterBlueprint.ts:45](https://github.com/stonemjs/aws-lambda-http-adapter/blob/266a5c901335674bf07c5995909e8ee8116e2bba/src/options/AwsLambdaHttpAdapterBlueprint.ts#L45)

Application-level settings, including environment, middleware, logging, and service registration.

#### Overrides

`StoneBlueprint.stone`

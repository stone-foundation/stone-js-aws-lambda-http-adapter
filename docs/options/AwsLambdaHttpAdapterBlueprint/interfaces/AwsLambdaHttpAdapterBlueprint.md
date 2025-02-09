[**AWS Lambda HTTP Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda HTTP Adapter Documentation](../../../modules.md) / [options/AwsLambdaHttpAdapterBlueprint](../README.md) / AwsLambdaHttpAdapterBlueprint

# Interface: AwsLambdaHttpAdapterBlueprint

Defined in: [aws-lambda-http-adapter/src/options/AwsLambdaHttpAdapterBlueprint.ts:33](https://github.com/stonemjs/aws-lambda-http-adapter/blob/b2e29f567ac56717023f9597000ee3f0d0278093/src/options/AwsLambdaHttpAdapterBlueprint.ts#L33)

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

Defined in: [aws-lambda-http-adapter/src/options/AwsLambdaHttpAdapterBlueprint.ts:37](https://github.com/stonemjs/aws-lambda-http-adapter/blob/b2e29f567ac56717023f9597000ee3f0d0278093/src/options/AwsLambdaHttpAdapterBlueprint.ts#L37)

Application-level settings, including environment, middleware, logging, and service registration.

#### Overrides

`StoneBlueprint.stone`

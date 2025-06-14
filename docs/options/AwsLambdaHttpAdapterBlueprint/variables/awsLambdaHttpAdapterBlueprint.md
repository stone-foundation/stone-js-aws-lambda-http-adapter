[**AWS Lambda HTTP Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda HTTP Adapter Documentation](../../../modules.md) / [options/AwsLambdaHttpAdapterBlueprint](../README.md) / awsLambdaHttpAdapterBlueprint

# Variable: awsLambdaHttpAdapterBlueprint

> `const` **awsLambdaHttpAdapterBlueprint**: [`AwsLambdaHttpAdapterBlueprint`](../interfaces/AwsLambdaHttpAdapterBlueprint.md)

Defined in: [aws-lambda-http-adapter/src/options/AwsLambdaHttpAdapterBlueprint.ts:58](https://github.com/stonemjs/aws-lambda-http-adapter/blob/2fb8e4d048853c60484edbc94c3249aefb421def/src/options/AwsLambdaHttpAdapterBlueprint.ts#L58)

Default blueprint configuration for the AWS Lambda Http Adapter.

This blueprint defines the initial configuration for the AWS Lambda Http adapter
within the Stone.js framework. It includes:
- An alias for the AWS Lambda platform (`AWS_LAMBDA_HTTP_PLATFORM`).
- A default resolver function (currently a placeholder).
- Middleware, hooks, and state flags (`current`, `default`, `preferred`).

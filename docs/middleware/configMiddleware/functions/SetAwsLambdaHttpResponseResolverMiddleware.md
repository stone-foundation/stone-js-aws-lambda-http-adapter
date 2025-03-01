[**AWS Lambda HTTP Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda HTTP Adapter Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / SetAwsLambdaHttpResponseResolverMiddleware

# Function: SetAwsLambdaHttpResponseResolverMiddleware()

> **SetAwsLambdaHttpResponseResolverMiddleware**(`context`, `next`): `Promise`\<`IBlueprint`\>

Defined in: [aws-lambda-http-adapter/src/middleware/configMiddleware.ts:19](https://github.com/stonemjs/aws-lambda-http-adapter/blob/f289dee0aae635648af98bb65369a05e133b69bc/src/middleware/configMiddleware.ts#L19)

Middleware to dynamically set response resolver for adapter.

## Parameters

### context

`BlueprintContext`\<`IBlueprint`, `ClassType`\>

The configuration context containing modules and blueprint.

### next

`NextPipe`\<`BlueprintContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>

The next pipeline function to continue processing.

## Returns

`Promise`\<`IBlueprint`\>

The updated blueprint or a promise resolving to it.

## Example

```typescript
SetAwsLambdaHttpResponseResolverMiddleware(context, next)
```

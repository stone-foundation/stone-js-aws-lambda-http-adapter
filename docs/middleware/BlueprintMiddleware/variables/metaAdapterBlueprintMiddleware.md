[**AWS Lambda HTTP Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda HTTP Adapter Documentation](../../../modules.md) / [middleware/BlueprintMiddleware](../README.md) / metaAdapterBlueprintMiddleware

# Variable: metaAdapterBlueprintMiddleware

> `const` **metaAdapterBlueprintMiddleware**: `MetaPipe`\<`BlueprintContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>[]

Defined in: [aws-lambda-http-adapter/src/middleware/BlueprintMiddleware.ts:43](https://github.com/stonemjs/aws-lambda-http-adapter/blob/2fb8e4d048853c60484edbc94c3249aefb421def/src/middleware/BlueprintMiddleware.ts#L43)

Configuration for adapter processing middleware.

This array defines a list of middleware pipes, each with a `pipe` function and a `priority`.
These pipes are executed in the order of their priority values, with lower values running first.

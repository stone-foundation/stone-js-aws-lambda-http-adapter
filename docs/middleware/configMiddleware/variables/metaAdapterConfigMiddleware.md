[**AWS Lambda HTTP Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda HTTP Adapter Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / metaAdapterConfigMiddleware

# Variable: metaAdapterConfigMiddleware

> `const` **metaAdapterConfigMiddleware**: `MetaPipe`\<`ConfigContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>[]

Defined in: aws-lambda-http-adapter/src/middleware/configMiddleware.ts:35

Configuration for adapter processing middleware.

This array defines a list of middleware pipes, each with a `pipe` function and a `priority`.
These pipes are executed in the order of their priority values, with lower values running first.

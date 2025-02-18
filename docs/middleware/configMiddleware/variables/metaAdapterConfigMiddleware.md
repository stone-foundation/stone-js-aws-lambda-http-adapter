[**AWS Lambda HTTP Adapter Documentation v0.0.2**](../../../README.md)

***

[AWS Lambda HTTP Adapter Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / metaAdapterConfigMiddleware

# Variable: metaAdapterConfigMiddleware

> `const` **metaAdapterConfigMiddleware**: `MetaPipe`\<`ConfigContext`\<`IBlueprint`, `ClassType`\>, `IBlueprint`\>[]

Defined in: [aws-lambda-http-adapter/src/middleware/configMiddleware.ts:43](https://github.com/stonemjs/aws-lambda-http-adapter/blob/c19fde3ee4450c0cd7d8d2aec48335308371d4de/src/middleware/configMiddleware.ts#L43)

Configuration for adapter processing middleware.

This array defines a list of middleware pipes, each with a `pipe` function and a `priority`.
These pipes are executed in the order of their priority values, with lower values running first.

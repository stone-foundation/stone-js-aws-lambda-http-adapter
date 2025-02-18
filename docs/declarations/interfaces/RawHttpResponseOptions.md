[**AWS Lambda HTTP Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda HTTP Adapter Documentation](../../modules.md) / [declarations](../README.md) / RawHttpResponseOptions

# Interface: RawHttpResponseOptions

Defined in: [aws-lambda-http-adapter/src/declarations.ts:121](https://github.com/stonemjs/aws-lambda-http-adapter/blob/c19fde3ee4450c0cd7d8d2aec48335308371d4de/src/declarations.ts#L121)

Represents options for configuring a raw HTTP response.

Extends the `RawResponseOptions` interface to include additional properties
for managing response content, headers, status codes, and streaming files.

## Extends

- `RawResponseOptions`

## Indexable

\[`k`: `string` \| `number` \| `symbol`\]: `unknown`

## Properties

### body?

> `optional` **body**: `unknown`

Defined in: [aws-lambda-http-adapter/src/declarations.ts:125](https://github.com/stonemjs/aws-lambda-http-adapter/blob/c19fde3ee4450c0cd7d8d2aec48335308371d4de/src/declarations.ts#L125)

The body of the HTTP response. Can be of any type, including strings, objects, or buffers.

***

### headers?

> `optional` **headers**: `Record`\<`string`, `string`\>

Defined in: [aws-lambda-http-adapter/src/declarations.ts:141](https://github.com/stonemjs/aws-lambda-http-adapter/blob/c19fde3ee4450c0cd7d8d2aec48335308371d4de/src/declarations.ts#L141)

Headers to include in the HTTP response.
Can be provided as key-value pairs.

***

### isBase64Encoded?

> `optional` **isBase64Encoded**: `boolean`

Defined in: [aws-lambda-http-adapter/src/declarations.ts:146](https://github.com/stonemjs/aws-lambda-http-adapter/blob/c19fde3ee4450c0cd7d8d2aec48335308371d4de/src/declarations.ts#L146)

The encoding format of the response body, such as `base64`.

***

### statusCode

> **statusCode**: `number`

Defined in: [aws-lambda-http-adapter/src/declarations.ts:130](https://github.com/stonemjs/aws-lambda-http-adapter/blob/c19fde3ee4450c0cd7d8d2aec48335308371d4de/src/declarations.ts#L130)

The HTTP status code of the response (e.g., `200`, `404`).

***

### statusMessage?

> `optional` **statusMessage**: `string`

Defined in: [aws-lambda-http-adapter/src/declarations.ts:135](https://github.com/stonemjs/aws-lambda-http-adapter/blob/c19fde3ee4450c0cd7d8d2aec48335308371d4de/src/declarations.ts#L135)

The status message accompanying the HTTP status code (e.g., `OK`, `Not Found`).

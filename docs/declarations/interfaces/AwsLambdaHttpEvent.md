[**AWS Lambda HTTP Adapter Documentation v0.0.2**](../../README.md)

***

[AWS Lambda HTTP Adapter Documentation](../../modules.md) / [declarations](../README.md) / AwsLambdaHttpEvent

# Interface: AwsLambdaHttpEvent

Defined in: [aws-lambda-http-adapter/src/declarations.ts:39](https://github.com/stonemjs/aws-lambda-http-adapter/blob/2fb8e4d048853c60484edbc94c3249aefb421def/src/declarations.ts#L39)

Represents the structure of an AWS Lambda HTTP event.

This interface defines the standard properties of an HTTP event in AWS Lambda,
including headers, query parameters, the request context, and other metadata.

## Extends

- `Record`\<`string`, `unknown`\>

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### body?

> `optional` **body**: `unknown`

Defined in: [aws-lambda-http-adapter/src/declarations.ts:48](https://github.com/stonemjs/aws-lambda-http-adapter/blob/2fb8e4d048853c60484edbc94c3249aefb421def/src/declarations.ts#L48)

The body of the HTTP request.

***

### encoding?

> `optional` **encoding**: `string`

Defined in: [aws-lambda-http-adapter/src/declarations.ts:53](https://github.com/stonemjs/aws-lambda-http-adapter/blob/2fb8e4d048853c60484edbc94c3249aefb421def/src/declarations.ts#L53)

The encoding format of the body, such as `base64`.

***

### headers

> **headers**: `Record`\<`string`, `string`\>

Defined in: [aws-lambda-http-adapter/src/declarations.ts:68](https://github.com/stonemjs/aws-lambda-http-adapter/blob/2fb8e4d048853c60484edbc94c3249aefb421def/src/declarations.ts#L68)

The headers of the HTTP request as key-value pairs.

***

### httpMethod?

> `optional` **httpMethod**: `string`

Defined in: [aws-lambda-http-adapter/src/declarations.ts:73](https://github.com/stonemjs/aws-lambda-http-adapter/blob/2fb8e4d048853c60484edbc94c3249aefb421def/src/declarations.ts#L73)

The HTTP method of the request (e.g., `GET`, `POST`).

***

### isBase64Encoded?

> `optional` **isBase64Encoded**: `boolean`

Defined in: [aws-lambda-http-adapter/src/declarations.ts:63](https://github.com/stonemjs/aws-lambda-http-adapter/blob/2fb8e4d048853c60484edbc94c3249aefb421def/src/declarations.ts#L63)

Indicates whether the request body is base64-encoded.

***

### path?

> `optional` **path**: `string`

Defined in: [aws-lambda-http-adapter/src/declarations.ts:43](https://github.com/stonemjs/aws-lambda-http-adapter/blob/2fb8e4d048853c60484edbc94c3249aefb421def/src/declarations.ts#L43)

The path of the HTTP request.

***

### queryStringParameters?

> `optional` **queryStringParameters**: `Record`\<`string`, `string`\>

Defined in: [aws-lambda-http-adapter/src/declarations.ts:78](https://github.com/stonemjs/aws-lambda-http-adapter/blob/2fb8e4d048853c60484edbc94c3249aefb421def/src/declarations.ts#L78)

The query string parameters included in the request.

***

### rawPath?

> `optional` **rawPath**: `string`

Defined in: [aws-lambda-http-adapter/src/declarations.ts:58](https://github.com/stonemjs/aws-lambda-http-adapter/blob/2fb8e4d048853c60484edbc94c3249aefb421def/src/declarations.ts#L58)

The raw path of the HTTP request, as sent by the client.

***

### requestContext?

> `optional` **requestContext**: `object`

Defined in: [aws-lambda-http-adapter/src/declarations.ts:83](https://github.com/stonemjs/aws-lambda-http-adapter/blob/2fb8e4d048853c60484edbc94c3249aefb421def/src/declarations.ts#L83)

The context of the request, including identity and HTTP metadata.

#### http?

> `optional` **http**: `object`

##### http.method?

> `optional` **method**: `string`

##### http.sourceIp?

> `optional` **sourceIp**: `string`

#### httpMethod?

> `optional` **httpMethod**: `string`

#### identity?

> `optional` **identity**: `object`

##### identity.sourceIp?

> `optional` **sourceIp**: `string`

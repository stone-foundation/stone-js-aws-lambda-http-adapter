import {
  AdapterEventBuilder,
  AdapterOptions
} from '@stone-js/core'
import {
  IncomingHttpEvent,
  OutgoingHttpResponse
} from '@stone-js/http-core'
import { AwsLambdaHttpAdapter } from '../src/AwsLambdaHttpAdapter'
import { RawHttpResponseWrapper } from '../src/RawHttpResponseWrapper'
import { AwsLambdaHttpAdapterError } from '../src/errors/AwsLambdaHttpAdapterError'

vi.mock('../src/RawHttpResponseWrapper', () => ({
  RawHttpResponseWrapper: {
    create: vi.fn()
  }
}))

describe('AWSLambdaHttpAdapter', () => {
  let adapterOptions: AdapterOptions<IncomingHttpEvent, OutgoingHttpResponse>

  beforeEach(() => {
    adapterOptions = {
      hooks: {},
      blueprint: {
        get: vi.fn()
      },
      handlerResolver: vi.fn(),
      logger: {
        error: vi.fn()
      }
    } as any
  })

  it('should create an instance with correct https configuration', () => {
    const adapter = AwsLambdaHttpAdapter.create(adapterOptions)
    expect(adapter).toBeInstanceOf(AwsLambdaHttpAdapter)
  })

  it('should throw error when used outside AWS Lambda context', async () => {
    const adapter = AwsLambdaHttpAdapter.create(adapterOptions)

    global.window = {} as any // Simulate browser context

    await expect(adapter.run()).rejects.toThrow(AwsLambdaHttpAdapterError)

    delete (global as any).window // Cleanup
  })

  it('should call the appropriate event listener on request', async () => {
    const adapter = AwsLambdaHttpAdapter.create(adapterOptions)
    const mockEvent = {} as any

    IncomingHttpEvent.create = vi.fn()
    RawHttpResponseWrapper.create = vi.fn()
    AdapterEventBuilder.create = vi.fn((options) => options.resolver({}))
    // @ts-expect-error
    adapter.sendEventThroughDestination = vi.fn()

    const handler = await adapter.run()

    const rawResponse = await handler(mockEvent, {})

    expect(rawResponse).toBeUndefined()
    expect(AdapterEventBuilder.create).toHaveBeenCalled()
    // @ts-expect-error
    expect(adapter.sendEventThroughDestination).toHaveBeenCalled()
    expect(RawHttpResponseWrapper.create).toHaveBeenCalledWith(expect.anything())
  })
})

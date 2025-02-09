import { Mock } from 'vitest'
import { addBlueprint } from '@stone-js/core'
import { AwsLambdaHttp, AwsLambdaHttpOptions } from '../../src/decorators/AwsLambdaHttp'
import { awsLambdaHttpAdapterBlueprint } from '../../src/options/AwsLambdaHttpAdapterBlueprint'

/* eslint-disable @typescript-eslint/no-extraneous-class */

// Mock @stone-js/core
vi.mock('@stone-js/core', async (importOriginal) => {
  const actual: any = await importOriginal()
  return {
    ...actual,
    addBlueprint: vi.fn(() => {}),
    classDecoratorLegacyWrapper: (fn: Function) => {
      fn()
      return fn
    }
  }
})

describe('AwsLambdaHttp', () => {
  it('should call addBlueprint with correct parameters', () => {
    (addBlueprint as Mock).mockReturnValueOnce(() => {})
    const options: AwsLambdaHttpOptions = awsLambdaHttpAdapterBlueprint.stone.adapters?.[0] ?? {}
    AwsLambdaHttp(options)(class {})
    expect(addBlueprint).toHaveBeenCalled()
  })

  it('should call addBlueprint with default options if none are provided', () => {
    vi.mocked(addBlueprint).mockImplementation(() => {})
    AwsLambdaHttp()(class {})
    expect(addBlueprint).toHaveBeenCalled()
  })
})

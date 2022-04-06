import { describe, expect, test } from 'vitest'
import dayjs from './dayjs'

describe('dayjs', () => {
  test('dayjs locale', () => {
    expect(dayjs.locale()).toBe('zh-cn')
    expect(dayjs('2000-01-01').format('ddd')).toBe('周六')
  })
})

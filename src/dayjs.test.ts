import { expect, test } from 'vitest'
import dayjs from './dayjs'

test('dayjs locale', () => {
  expect(dayjs('2000-01-01').format('ddd')).toBe('周六')
})

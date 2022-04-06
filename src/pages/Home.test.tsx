import { render, screen } from '@testing-library/react'
import Home from './Home'

describe('Home', () => {
  beforeAll(async () => {
    await render(<Home />)
  })

  test.concurrent('text Home', () => {
    const el = screen.getByText('Home')
    expect(el).toBeInTheDocument()
    expect(el.tagName).toBe('DIV')
  })
})

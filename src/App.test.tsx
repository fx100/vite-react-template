import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  beforeAll(async () => {
    await render(<App />)
  })

  test.concurrent('title', () => {
    const el = screen.getByText('Hello Vite + React!')
    expect(el).toBeInTheDocument()
    expect(el.tagName).toBe('P')
  })

  test.concurrent('link home', () => {
    const el = screen.getByText('Home')
    expect(el).toBeInTheDocument()
    expect(el.tagName).toBe('A')
    expect(el.getAttribute('href')).toBe('/')
  })
})

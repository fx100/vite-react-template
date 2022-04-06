import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import About from './About'

describe('About', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/about/c']}>
        <Routes>
          <Route path="/about" element={<About />}>
            <Route path="a" element={<div>ChildA</div>} />
            <Route path="b" element={<div>ChildB</div>} />
            <Route path="*" element={<div>NotFound</div>} />
          </Route>
        </Routes>
      </MemoryRouter>,
    )
  })

  test('link AboutA', () => {
    const el = screen.getByText('AboutA')
    expect(el).toBeInTheDocument()
    expect(el.tagName).toBe('A')
    expect(el.getAttribute('href')).toBe('/about/a')
  })

  test('link AboutB', () => {
    const el = screen.getByText('AboutB')
    expect(el).toBeInTheDocument()
    expect(el.tagName).toBe('A')
    expect(el.getAttribute('href')).toBe('/about/b')
  })

  test('page NotFound', () => {
    expect(screen.getByText('NotFound')).toBeInTheDocument()
  })

  test('page AboutA', async () => {
    userEvent.click(screen.getByText('AboutA'))
    await waitFor(() => screen.findByText('ChildA'))
    expect(screen.getByText('ChildA')).toBeInTheDocument()
  })

  test('page AboutB', async () => {
    userEvent.click(screen.getByText('AboutB'))
    await waitFor(() => screen.findByText('ChildB'))
    expect(screen.getByText('ChildB')).toBeInTheDocument()
  })
})

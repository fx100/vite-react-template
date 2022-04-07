import { render, screen, waitFor } from '@testing-library/react'
import AboutA from './AboutA'
import { rest } from 'msw'
import { server } from '~/mocks/server'
import SWRConfigPreset from '~/components/SWRConfigPreset'

describe('AboutA', () => {
  test('mock success', async () => {
    const data = {
      key99: 'value99',
    }
    server.use(
      rest.get('/api/user/:userId', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(data))
      }),
    )
    render(
      <SWRConfigPreset>
        <AboutA />
      </SWRConfigPreset>,
    )
    await waitFor(() => screen.findByText(/成功|失败/))
    expect(screen.getByText(/成功/)).toBeInTheDocument()
    expect(
      screen.getByText(new RegExp(JSON.stringify(data))),
    ).toBeInTheDocument()
  })

  test('mock error', async () => {
    server.use(
      rest.get('/api/user/:userId', (req, res, ctx) => {
        return res(ctx.status(500))
      }),
    )
    render(
      <SWRConfigPreset>
        <AboutA />
      </SWRConfigPreset>,
    )
    await waitFor(() => screen.findByText(/成功|失败/))
    expect(screen.queryByText(/失败/)).toBeInTheDocument()
    expect(
      screen.getByText(/{"error":"Request failed with status code 500"}/),
    ).toBeInTheDocument()
  })
})
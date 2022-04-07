import { rest } from 'msw'

export const handlers = [
  rest.get('/api/user/:userId', (req, res, ctx) => {
    const { userId } = req.params
    return res(
      ctx.status(200),
      ctx.json({
        userId,
        username: `username-${userId}`,
      }),
    )
  }),
]

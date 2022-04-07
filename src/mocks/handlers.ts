import { rest } from 'msw'

export const handlers = [
  rest.get('/api/user/:userId', (req, res, ctx) => {
    const { userId } = req.params

    if (Math.random() > 0.5) {
      return res(
        ctx.delay(1000),
        ctx.status(200),
        ctx.json({
          userId,
          username: `username-${userId}`,
        }),
      )
    } else {
      return res(ctx.delay(1000), ctx.status(500))
    }
  }),
]

import { rest } from 'msw'

export const handlers = [
  rest.get('/api/user/:userId', (req, res, ctx) => {
    const { userId } = req.params

    const delay = ctx.delay(100)

    if (parseInt(userId as string) % 2 === 1) {
      return res(
        delay,
        ctx.status(200),
        ctx.json({
          userId,
          username: `username-${userId}`,
        }),
      )
    } else {
      return res(delay, ctx.status(500))
    }
  }),
]

import type { RouteObject } from 'react-router-dom'
import lazyS from '~/utils/lazyWithSuspense'

const routes: RouteObject[] = [
  { path: '/', element: lazyS(() => import('~/pages/Home')) },
  {
    path: 'about',
    element: lazyS(() => import('~/pages/About')),
    children: [
      {
        path: 'a',
        element: lazyS(() => import('~/pages/AboutA')),
      },
      {
        path: 'b',
        element: lazyS(() => import('~/pages/AboutB')),
      },
      {
        path: '*',
        element: lazyS(() => import('~/pages/NotFound')),
      },
    ],
  },
  {
    path: 'table',
    element: lazyS(() => import('~/pages/Table')),
  },
  {
    path: 'formily',
    element: lazyS(() => import('~/pages/Formily')),
  },
  {
    path: '*',
    element: lazyS(() => import('~/pages/NotFound')),
  },
]

export default routes

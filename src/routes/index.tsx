import { lazy, Suspense } from 'react'
import type { RouteObject } from 'react-router-dom'
import Layout from '~/layouts/Layout'

const lazyWithSuspense = (
  factory: () => Promise<{ default: () => JSX.Element }>,
  fallback = <div>loading...</div>,
) => {
  const LazyComponent = lazy(factory)

  return (
    <Suspense fallback={fallback}>
      <LazyComponent />
    </Suspense>
  )
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: lazyWithSuspense(() => import('~/pages/Home')) },
      {
        path: 'about',
        element: lazyWithSuspense(() => import('~/pages/About')),
        children: [
          {
            path: 'a',
            element: lazyWithSuspense(() => import('~/pages/AboutA')),
          },
          {
            path: 'b',
            element: lazyWithSuspense(() => import('~/pages/AboutB')),
          },
          {
            path: '*',
            element: lazyWithSuspense(() => import('~/pages/NotFound')),
          },
        ],
      },
      {
        path: 'table',
        element: lazyWithSuspense(() => import('~/pages/Table')),
      },
      {
        path: 'formily',
        element: lazyWithSuspense(() => import('~/pages/Formily')),
      },
      {
        path: '*',
        element: lazyWithSuspense(() => import('~/pages/NotFound')),
      },
    ],
  },
]

export default routes

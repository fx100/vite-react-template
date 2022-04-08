import type { RouteObject } from 'react-router-dom'
import Layout from '~/layouts/Layout'
import layoutRoutes from './layout'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: layoutRoutes,
  },
]

export default routes

import type { RouteObject } from 'react-router-dom'
import { CrownOutlined, UserOutlined } from '@ant-design/icons'
import lazyS from '~/utils/lazyWithSuspense'

const routes: RouteObject[] = [
  {
    path: '/',
    element: lazyS(() => import('~/pages/Home')),
    menu: {
      icon: <CrownOutlined />,
      name: 'Home',
    },
  },
  {
    path: 'about',
    element: lazyS(() => import('~/pages/About')),
    menu: {
      icon: <UserOutlined />,
      name: 'About',
    },
    children: [
      {
        path: 'a',
        element: lazyS(() => import('~/pages/AboutA')),
        menu: {
          name: 'AboutA',
        },
      },
      {
        path: 'b',
        element: lazyS(() => import('~/pages/AboutB')),
        menu: {
          name: 'AboutB',
        },
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
    menu: {
      name: 'ProTable 测试',
    },
  },
  {
    path: 'formily',
    element: lazyS(() => import('~/pages/Formily')),
    menu: {
      name: 'Formily 测试',
    },
  },
  {
    path: '*',
    element: lazyS(() => import('~/pages/NotFound')),
  },
]

export default routes

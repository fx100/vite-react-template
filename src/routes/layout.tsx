import type { RouteObject } from 'react-router-dom'
import { CrownOutlined, UserOutlined } from '@ant-design/icons'
import renderWithLazy from '~/utils/renderWithLazy'

const routes: RouteObject[] = [
  {
    path: '/',
    element: renderWithLazy(() => import('~/pages/Home')),
    menu: {
      icon: <CrownOutlined />,
      name: 'Home',
    },
  },
  {
    path: 'about',
    element: renderWithLazy(() => import('~/pages/About')),
    menu: {
      icon: <UserOutlined />,
      name: 'About',
    },
    children: [
      {
        path: 'a',
        element: renderWithLazy(() => import('~/pages/AboutA')),
        menu: {
          name: 'AboutA',
        },
      },
      {
        path: 'b',
        element: renderWithLazy(() => import('~/pages/AboutB')),
        menu: {
          name: 'AboutB',
        },
      },
      {
        path: '*',
        element: renderWithLazy(() => import('~/pages/NotFound')),
      },
    ],
  },
  {
    path: 'table',
    element: renderWithLazy(() => import('~/pages/Table')),
    menu: {
      name: 'ProTable 测试',
    },
  },
  {
    path: 'formily',
    element: renderWithLazy(() => import('~/pages/Formily')),
    menu: {
      name: 'Formily 测试',
    },
  },
  {
    path: '*',
    element: renderWithLazy(() => import('~/pages/NotFound')),
  },
]

export default routes

import type { ReactNode } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { CrownOutlined, UserOutlined, GithubOutlined } from '@ant-design/icons'
import ProLayout from '@ant-design/pro-layout'
import Footer from '@ant-design/pro-layout/es/Footer'
import type { MenuDataItem } from '@ant-design/pro-layout'
import logo from '~/favicon.svg'

const routes = [
  {
    path: '/',
    name: 'Home',
    icon: <CrownOutlined />,
  },
  {
    path: '/about',
    name: 'About',
    icon: <UserOutlined />,
    routes: [
      {
        path: 'a',
        name: 'AboutA',
      },
      {
        path: 'b',
        name: 'AboutB',
      },
    ],
  },
]

const Layout = () => {
  const location = useLocation()

  return (
    <>
      <ProLayout
        style={{ minHeight: '100vh' }}
        layout="mix"
        logo={logo}
        title={import.meta.env.VITE_APP_TITLE}
        fixedHeader={true}
        fixSiderbar={true}
        location={{
          pathname: location.pathname,
        }}
        route={{
          routes,
        }}
        menuItemRender={(item: Required<MenuDataItem>, dom: ReactNode) => (
          <Link to={item.path}>{dom}</Link>
        )}
        footerRender={() => (
          <Footer
            copyright="@2022 顺坚科技"
            links={[
              {
                key: 'shunjiantech',
                title: (
                  <>
                    <GithubOutlined /> shunjiantech
                  </>
                ),
                href: 'https://github.com/shunjiantech',
                blankTarget: true,
              },
            ]}
          />
        )}
      >
        <Outlet />
      </ProLayout>
    </>
  )
}

export default Layout

import { Suspense } from 'react'
import type { ReactNode } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { GithubOutlined } from '@ant-design/icons'
import ProLayout from '@ant-design/pro-layout'
import Footer from '@ant-design/pro-layout/es/Footer'
import type { MenuDataItem } from '@ant-design/pro-layout'
import type { Route } from '@ant-design/pro-layout/es/typings'
import logo from '~/favicon.svg'
import type { RouteObject } from 'react-router-dom'
import layoutRoutes from '~/routes/layout'

const transformRoutes = (routes: RouteObject[]): Route[] => {
  return routes
    .filter((route) => {
      return route?.menu && (route.index || typeof route.path === 'string')
    })
    .map((route) => {
      return {
        path: route?.index ? '' : route.path,
        name: route.menu?.name,
        icon: route.menu?.icon,
        routes: route?.children && transformRoutes(route.children),
      }
    })
}

const routes = transformRoutes(layoutRoutes)

console.log(routes)

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
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </ProLayout>
    </>
  )
}

export default Layout

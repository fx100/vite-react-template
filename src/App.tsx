import { BrowserRouter, useRoutes } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import SWRConfigPreset from '~/components/SWRConfigPreset'
import routes from '~/routes'

const App = () => {
  const element = useRoutes(routes)

  return (
    <ConfigProvider locale={zhCN}>
      <SWRConfigPreset>{element}</SWRConfigPreset>
    </ConfigProvider>
  )
}

const Router = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

export default Router

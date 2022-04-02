import React from 'react'
import ReactDOMClient from 'react-dom/client'
import App from './App'

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

const container = document.getElementById('root')

if (!container) {
  throw new Error('root not found')
}

const root = ReactDOMClient.createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { worker as mocksWorker } from './mocks/worker'

import './dayjs'

if (import.meta.env.DEV && /true/i.test(import.meta.env.VITE_APP_MOCK)) {
  mocksWorker.start({ onUnhandledRequest: 'bypass' })
}

document.title = import.meta.env.VITE_APP_TITLE

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

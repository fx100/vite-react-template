import React from 'react'
import ReactDOMClient from 'react-dom/client'
import App from './App'

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

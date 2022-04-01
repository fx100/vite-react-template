import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

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

const App = () => {
  return (
    <BrowserRouter>
      <p>Hello Vite + React!</p>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <Routes>
        <Route
          path="/"
          element={lazyWithSuspense(() => import('~/pages/Home'))}
        />
        <Route
          path="/about"
          element={lazyWithSuspense(() => import('~/pages/About'))}
        >
          <Route
            path="a"
            element={lazyWithSuspense(() => import('~/pages/AboutA'))}
          />
          <Route
            path="b"
            element={lazyWithSuspense(() => import('~/pages/AboutB'))}
          />
          <Route
            path="*"
            element={lazyWithSuspense(() => import('~/pages/NotFound'))}
          />
        </Route>
        <Route
          path="*"
          element={lazyWithSuspense(() => import('~/pages/NotFound'))}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

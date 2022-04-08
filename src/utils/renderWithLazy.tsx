import { lazy } from 'react'

export const renderWithLazy = (
  factory: () => Promise<{ default: () => JSX.Element }>,
) => {
  const LazyComponent = lazy(factory)

  return <LazyComponent />
}

export default renderWithLazy

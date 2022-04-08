import { lazy, Suspense } from 'react'

export const lazyWithSuspense = (
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

export default lazyWithSuspense

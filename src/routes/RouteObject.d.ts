import type { ReactNode } from 'react'

declare module 'react-router-dom' {
  interface RouteObject {
    menu?: {
      icon?: ReactNode
      name?: string
    }
  }
}

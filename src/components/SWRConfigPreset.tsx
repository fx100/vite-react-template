import type { ReactNode } from 'react'
import { SWRConfig } from 'swr'
import request from '~/utils/request'

interface Props {
  children: ReactNode
}

const SWRConfigPreset = ({ children }: Props) => {
  return (
    <SWRConfig
      value={{
        provider: () => new Map(),
        fetcher: (url, args) =>
          request({
            ...args,
            url,
          }),
      }}
    >
      {children}
    </SWRConfig>
  )
}

export default SWRConfigPreset

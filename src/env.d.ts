/// <reference types="vite/client" />
/// <reference types="vitest/globals" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_MOCK: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

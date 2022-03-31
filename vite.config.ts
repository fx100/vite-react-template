import * as fs from 'fs'
import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: fs
        .readFileSync('.browserslistrc', 'utf-8')
        .split('\n')
        .filter((item) => item),
    }),
    eslint(),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
})

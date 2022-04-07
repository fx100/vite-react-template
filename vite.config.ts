/// <reference types="vitest" />

import * as fs from 'fs'
import * as path from 'path'
import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import eslint from 'vite-plugin-eslint'
import imp from 'vite-plugin-imp'

export default defineConfig(({ command }) => {
  const common: UserConfig = {
    plugins: [react(), eslint()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: path.resolve(__dirname, 'src/setupTests.ts'),
    },
  }

  if (command === 'serve') {
    return {
      ...common,
      plugins: [
        ...common.plugins,
        imp({
          libList: [
            {
              libName: 'antd',
              libDirectory: 'dist',
              style: () => 'antd/dist/antd.css',
            },
          ],
        }),
      ],
    }
  } else {
    return {
      ...common,
      plugins: [
        ...common.plugins,
        legacy({
          targets: fs
            .readFileSync('.browserslistrc', 'utf-8')
            .split('\n')
            .filter((item) => item),
        }),
        imp({
          libList: [
            {
              libName: 'antd',
              libDirectory: 'es',
              style: (name) => `antd/es/${name}/style`,
            },
          ],
        }),
      ],
    }
  }
})

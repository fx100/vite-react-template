import * as fs from 'fs'
import * as path from 'path'
import { defineConfig, loadEnv, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import eslint from 'vite-plugin-eslint'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())

  const common: UserConfig = {
    plugins: [
      react(),
      eslint(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            ...env,
          },
        },
      }),
    ],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },
  }

  if (command === 'serve') {
    return {
      ...common,
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
      ],
    }
  }
})

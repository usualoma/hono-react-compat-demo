import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      'react': 'hono/jsx/dom',
      'react-dom': 'hono/jsx/dom',
    },
  },
})

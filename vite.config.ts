import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'RightPropertyGeneratedWebUiToolkit',
      formats: ['es'],
      fileName: () => 'index.mjs',
    },
    rollupOptions: {
      // IMPORTANT: externalize React AND the JSX runtimes.
      // If we don't externalize jsx-runtime, Rollup may inline a CJS wrapper
      // that ends up calling __require("react") at runtime in the browser.
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        'react-dom/client',
        'react-dom/server',
        'fabric',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

const external = [
  'react',
  'react-dom',
  'react/jsx-runtime',
  'react/jsx-dev-runtime',
  'react-dom/client',
  'react-dom/server',
  'fabric',
  '@measured/puck',
  '@radix-ui/react-select',
  '@tailwindcss/vite',
  '@use-gesture/react',
  'class-variance-authority',
  'clsx',
  'framer-motion',
  'lucide-react',
  'react-router-dom',
  'swiper',
  'tailwind-merge',
  'tailwindcss',
]

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
    // IMPORTANT: don't inline images as base64 into JS chunks – emit real files instead
    assetsInlineLimit: 0,
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
        'plan-view': path.resolve(__dirname, 'src/plan-view.ts'),
        'puck-runtime': path.resolve(__dirname, 'src/puck-runtime.ts'),
      },
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.mjs`,
    },
    rollupOptions: {
      // IMPORTANT: externalize React AND the JSX runtimes.
      // If we don't externalize jsx-runtime, Rollup may inline a CJS wrapper
      // that ends up calling __require("react") at runtime in the browser.
      external,
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})

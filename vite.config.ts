import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const external = [
  'react',
  'react-dom',
  'react/jsx-runtime',
  'react/jsx-dev-runtime',
  'react-dom/client',
  'react-dom/server',
  'fabric',
  '@measured/puck',
  '@use-gesture/react',
  'class-variance-authority',
  'clsx',
  'framer-motion',
  'lucide-react',
  'react-router-dom',
  'swiper',
]

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    cssCodeSplit: true, // Enable CSS code splitting for template-specific CSS
    // IMPORTANT: don't inline images as base64 into JS chunks – emit real files instead
    assetsInlineLimit: 0,
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
        'plan-view': path.resolve(__dirname, 'src/plan-view.ts'),
        'puck-runtime': path.resolve(__dirname, 'src/puck-runtime.ts'),
        // CSS entry points for template-specific styles
        'styles/base': path.resolve(__dirname, 'src/styles/base.ts'),
        'styles/utilities': path.resolve(__dirname, 'src/styles/utilities.ts'),
        'styles/skyscrapper': path.resolve(__dirname, 'src/styles/skyscrapper.ts'),
        'styles/voodvale': path.resolve(__dirname, 'src/styles/voodvale.ts'),
        'styles/default': path.resolve(__dirname, 'src/styles/default.ts'),
        // Main CSS file (all templates) for backward compatibility
        'styles/main': path.resolve(__dirname, 'src/styles/main-all.ts'),
      },
      formats: ['es'],
      fileName: (format, entryName) => {
        // CSS files should keep .css extension
        if (entryName.startsWith('styles/')) {
          const name = entryName.replace('styles/', '');
          // Main CSS file keeps the original name for backward compatibility
          if (name === 'main') {
            return 'right-property-generated-web-ui-toolkit.css';
          }
          return name + '.css';
        }
        return `${entryName}.mjs`;
      },
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

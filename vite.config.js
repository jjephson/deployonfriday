import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Use './' for relative paths (works with custom domains)
  // Change to '/deployonfriday/' if deploying to GitHub Pages without custom domain
  base: './',
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router']
        }
      }
    }
  },
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=600'
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs'

// Plugin to copy index.html → 404.html after build
// so GitHub Pages serves the SPA for all routes.
function copy404Plugin() {
  return {
    name: 'copy-404',
    closeBundle() {
      const dist = resolve('dist')
      const indexPath = resolve(dist, 'index.html')
      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, resolve(dist, '404.html'))
      }
    }
  }
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), copy404Plugin()],
  // Use '/Agrobuddy/' for production (GitHub Pages) and '/' for local dev
  base: mode === 'production' ? '/Agrobuddy/' : '/',
}))

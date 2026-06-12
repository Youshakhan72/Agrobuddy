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
      fs.copyFileSync(
        resolve(dist, 'index.html'),
        resolve(dist, '404.html')
      )
    }
  }
}

export default defineConfig({
  plugins: [react(), copy404Plugin()],
  // Use the same base path as the GitHub Pages deployment (/Agrobuddy/)
  // so the built app and assets load correctly in production.
  base: '/Agrobuddy/',
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use the same base path as the GitHub Pages deployment (/Agrobuddy/)
  // so the built app and assets load correctly in production.
  base: '/Agrobuddy/',
})

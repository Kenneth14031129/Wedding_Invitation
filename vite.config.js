import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Remove the base path - Vercel doesn't need it and it can cause issues
  // base: '/Wedding_Invitation/', <- REMOVE THIS LINE
  
  build: {
    // Make sure assets are properly placed
    assetsDir: 'assets',
    // More verbose output for debugging
    emptyOutDir: true
  }
})
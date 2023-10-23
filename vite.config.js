import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3737
  }
})


// NETLIFY_AUTH_TOKEN: zJvXBlo6SkVJtmfDqBBFDOgJ9QJXRrrPVS7-sfZ-YTA
// NETLIFY_SITE_ID: d6a2b6b3-17e0-4ad7-afa3-49885d834b79

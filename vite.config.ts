import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react()
  ],
  build:{
    rollupOptions:{
      output:{
        manualChunks:{
          'react': ['react', 'react-dom'],
          'react-router': ['@tanstack/react-router'],
        },
      },
    }
  },
  server:{
    port: 3000
  }
})

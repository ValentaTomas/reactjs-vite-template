import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
  ],
  server: {
    hmr: process.env.GITPOD_WORKSPACE_URL
      ? {
        // Due to port fowarding, we have to replace
        // 'https' with the forwarded port, as this
        // is the URI created by Gitpod.
        host: process.env.GITPOD_WORKSPACE_URL.replace("https://", "3000-"),
        protocol: "wss",
        clientPort: 443
      }
      : true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

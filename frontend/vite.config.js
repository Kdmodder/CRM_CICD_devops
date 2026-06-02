import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        port: 3000,
        open: true,
        proxy: {
            '/api': {
                target: 'http://52.70.89.136:8080',
                changeOrigin: true,
            }
        }
    }
})

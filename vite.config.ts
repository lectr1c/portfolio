import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/docs/', // 👈 This is what's missing
    plugins: [react()],
    build: {
        outDir: './docs'
    }
})
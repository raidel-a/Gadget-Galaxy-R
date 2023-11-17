import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  assetsInclude: ['**/*.gltf', "**/*.png"],
  plugins: [react()],
  root: './',
  build: {
    outDir: './dist'
  }
});

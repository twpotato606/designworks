import { resolve } from 'path'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  base: '/designworks/',
  build: {
    rollupOptions: {
      input: {
        main:          resolve(__dirname, 'index.html'),
        civs:          resolve(__dirname, 'civs.html'),
        cv:            resolve(__dirname, 'cv.html'),
        mdm:           resolve(__dirname, 'mdm.html'),
        predatorsense: resolve(__dirname, 'predatorsense.html'),
        vision360:     resolve(__dirname, 'vision360.html'),
      },
    },
  },
})

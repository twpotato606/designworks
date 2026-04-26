import { resolve } from 'path'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    {
      name: 'root-redirect',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/' || req.url === '') {
            res.writeHead(302, { Location: '/designworks/pitch.html' })
            res.end()
          } else {
            next()
          }
        })
      },
    },
  ],
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
        'ai-research': resolve(__dirname, 'ai-research.html'),
      },
    },
  },
})

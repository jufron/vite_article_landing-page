import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index:'./src/index.html'
      },
      output: {
        dir: 'dist',
        chunkFileNames: 'js/[hash].js',
        entryFileNames: 'js/[hash].js',
        
        assetFileNames: ({name}) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
              return 'img/[hash][extname]';
          }
          
          if (/\.(css|scss)$/.test(name ?? '')) {
              return 'css/[hash][extname]';   
          }
 
          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return '[hash][extname]';
        },
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      }
    },
    outDir: "./dist"
  },
  resolve: {
    // Configure how Vite resolves import statements
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
      template: './src/index.html',
      entry: '/src/ts/script.ts'
    }),
    ViteImageOptimizer({
      include: [
        'jpg', 'jpeg', 'png', 'gif'
      ],
      jpeg: {
        quality: 60
      },
      png: {
        quality: 60
      },
      jpg: {
        quality: 40
      }
    }),
  ],
});


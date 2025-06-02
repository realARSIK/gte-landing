import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/gte-landing/',
  root: resolve(__dirname, 'src'),
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src', 'index.html'),
      },
      output: {
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: assetInfo => {
          const ext = assetInfo.name?.split('.').pop();
          if (ext === 'css') {
            return 'css/[name]-[hash][extname]';
          }
          if (['png','jpg','jpeg','gif','svg','webp'].includes(ext || '')) {
            return 'images/[name]-[hash][extname]';
          }
          if (['woff','woff2','ttf','eot','otf'].includes(ext || '')) {
            return 'fonts/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});

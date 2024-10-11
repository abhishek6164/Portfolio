// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000, // Increase the limit or configure manual chunks if necessary
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Example of code-splitting, you can adjust based on your actual imports
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
});

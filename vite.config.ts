// vite.config.ts
import { defineConfig } from 'vite';
export default defineConfig({
  base: "/Portfolio/",
  build: {
    outDir: "build", // Change the output directory to 'build'
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
});

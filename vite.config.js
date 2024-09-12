import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Set the root directory to the current folder if it's not src
  build: {
    rollupOptions: {
      input: './main.js', // Specify your custom entry point
    },
    outDir: 'dist', // Output directory
  },
  server: {
    port: 3000, // You can specify a port for the dev server
  }
});

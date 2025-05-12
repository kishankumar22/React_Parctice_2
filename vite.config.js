import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: ['.'] // Allow root directory
    }
  },
  optimizeDeps: {
    exclude: ['pdfjs-dist'], // Exclude pdfjs-dist from optimization
  },
});
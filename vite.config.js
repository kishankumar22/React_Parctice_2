import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  basename: '/React_Parctice_2/', // Set to your repository name
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // Ensure this points to the directory with `index.html`
  build: {
    rollupOptions: {
      input: './index.html', // Correct path to your entry file
    },
  },
});

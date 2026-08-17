import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Repository name for GitHub Pages deployment subpath
export const repoName = "mrnothing";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative base ('./') so that production builds work seamlessly on:
  // - Local file system preview
  // - GitHub Pages subpaths (https://sayyednaa.github.io/mrnothing/)
  // - Any static web server without path mismatch
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});

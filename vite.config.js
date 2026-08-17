import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages subpath deployment placeholder:
// Replace "YOUR_REPOSITORY_NAME" with your actual GitHub repository name if deploying to project site (e.g. https://USERNAME.github.io/REPOSITORY_NAME/)
const repoName = "YOUR_REPOSITORY_NAME";

export default defineConfig({
  plugins: [react()],
  // Automatically fallback to relative base for static hosting compatibility
  base: process.env.VITE_BASE_PATH || (repoName && repoName !== "YOUR_REPOSITORY_NAME" ? `/${repoName}/` : './'),
});

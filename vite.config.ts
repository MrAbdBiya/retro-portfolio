import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const base = env.VITE_BASE_PATH || '/';
    return {
      // Configurable base for different hosts (Vercel: '/', GitHub Pages: '/retro-portfolio/')
      base,
      define: {
        // Provide safe fallbacks so CI builds without a key
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY || ''),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || '')
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});

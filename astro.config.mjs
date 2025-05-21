// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: { sourcemap: process.env.NODE_ENV === 'development' },
  },

  integrations: [mdx()],

  /* este site va a fallar cuando estemos en produccion es solo un ejemplo */
  site: 'https://example.com',
});
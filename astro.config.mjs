import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://superaplicativos.github.io',
  base: '/miranda-tech',
  trailingSlash: 'always',
  build: {
    format: 'directory' // Generates slug/index.html for clean SEO-friendly URLs
  }
});

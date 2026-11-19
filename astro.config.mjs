// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sandy-prastyo.vercel.app',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});

import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  // ... other config options ...
  site: 'https://macsek-se.github.io',
  integrations: [react()],
});

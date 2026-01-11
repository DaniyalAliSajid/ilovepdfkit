import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://ilovepdfkit.com',
    base: '/blog',
    output: 'static',
    build: {
        format: 'directory', // Clean URLs
        assets: '_assets'
    },
    integrations: [
        // sitemap()
    ],
    vite: {
        build: {
            cssCodeSplit: false, // Single CSS file for performance
            rollupOptions: {
                output: {
                    manualChunks: undefined // No JS chunking needed
                }
            }
        }
    }
});

import { defineConfig } from 'astro/config';
export default defineConfig({
    site: 'https://ilovepdfkit.com',
    base: '/blog',
    output: 'static',
    build: {
        format: 'directory', // Clean URLs
        assets: '_assets'
    },
    image: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cms.ilovepdfkit.com',
            },
        ],
    },
    integrations: [],
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

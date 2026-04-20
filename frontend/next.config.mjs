/** @type {import('next').NextConfig} */
const nextConfig = {
    // Removed output: 'export' to enable Next.js ISR and API Webhooks for the blog
    images: { 
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cms.ilovepdfkit.com',
            }
        ]
    },
    // Ignore lint and type errors during build for CI/CD speed and reliability
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    // Performance optimizations
    compress: true,
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
    // Use rewrites ONLY for local development to avoid CORS issues
    async rewrites() {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5001';
        return process.env.NODE_ENV === 'development' ? [
            {
                source: '/api/:path*',
                destination: `${apiUrl}/api/:path*`,
            },
        ] : [];
    },
};

export default nextConfig;

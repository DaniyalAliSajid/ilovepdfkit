/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    // Performance optimizations
    compress: true,
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
    // Compiler optimizations
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    // Modern browser targeting to reduce polyfills
    experimental: {
        modern: true,
    },
    // Use rewrites ONLY for local development to avoid CORS issues
    async rewrites() {
        return process.env.NODE_ENV === 'development' ? [
            {
                source: '/api/:path*',
                destination: 'http://127.0.0.1:5000/api/:path*',
            },
        ] : [];
    },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
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
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000';
        return process.env.NODE_ENV === 'development' ? [
            {
                source: '/api/:path*',
                destination: `${apiUrl}/api/:path*`,
            },
            {
                source: '/blog',
                destination: 'http://localhost:4321/blog',
            },
            {
                source: '/blog/:path*',
                destination: 'http://localhost:4321/blog/:path*',
            },
            // Proxy internal Astro assets and Vite client in development
            {
                source: '/@vite/:path*',
                destination: 'http://localhost:4321/@vite/:path*',
            },
            {
                source: '/src/:path*',
                destination: 'http://localhost:4321/src/:path*',
            },
            {
                source: '/@id/:path*',
                destination: 'http://localhost:4321/@id/:path*',
            },
        ] : [];
    },
};

export default nextConfig;

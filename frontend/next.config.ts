import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

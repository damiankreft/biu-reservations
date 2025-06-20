import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    authInterrupts: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
    incomingRequests: true,
  },
  compiler: {
    styledComponents: true,
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? { exclude: ['error', 'warn'] }
        : false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/photo-**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photo-**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        port: '',
        pathname: '/photo-**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.daisyui.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;


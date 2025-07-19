import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      '27.254.134.159',
      'upload.wikimedia.org',
      'i.ytimg.com',
      'example.com',
    ],
    formats: ['image/webp'],
  },
  // Configure webpack to properly handle MUI and other dependencies
  webpack: (config, { isServer }) => {
    // Don't externalize MUI on server side
    if (isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  // Remove or adjust serverExternalPackages - don't externalize MUI
  serverExternalPackages: [],
  // Ensure proper transpilation of MUI packages
  transpilePackages: [
    '@mui/material',
    '@mui/icons-material',
    '@mui/x-date-pickers',
    '@emotion/react',
    '@emotion/styled',
  ],
};

export default nextConfig;

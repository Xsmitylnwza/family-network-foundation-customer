import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [
      '147.50.231.164',
      'upload.wikimedia.org',
      'upload.wikimedia.org',
      'i.ytimg.com',
    ], // อนุญาต hostname ของรูปภาพ
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '147.50.231.164',
        port: '9000',
        pathname: '/articles/**',
      },
    ],
  },
};

export default nextConfig;

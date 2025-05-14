import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imgnike-a.akamaihd.net',
        port: '',
      },
    ],
  },
};

export default nextConfig;

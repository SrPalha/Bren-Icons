/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  transpilePackages: ['bren-icons'],
  experimental: {
    externalDir: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'bren-icons': path.resolve(__dirname, '../..', 'dist', 'index.js'),
    };
    return config;
  },
};

module.exports = nextConfig

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['pt-BR', 'en'],
    defaultLocale: 'pt-BR',
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignora as advertências durante a build
  },
};

export default nextConfig;


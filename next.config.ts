import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'ko',
  },
  eslint: {
    // 빌드 시 ESLint 검사를 건너뜁니다.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 빌드 시 타입 체크를 건너뜁니다.
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

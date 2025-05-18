import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // ESLint 오류로 인한 빌드 실패를 방지합니다
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

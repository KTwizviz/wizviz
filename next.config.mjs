/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*", // 모든 /api/* 요청을 프록시 (현재 API 서버의 모든 엔드포인트는는 /api/*로 시작)
        destination: `${process.env.NEXT_PUBLIC_API_KEY}/api/:path*`, // 실제 API 서버(백엔드)로 Request
      },
    ];
  },

  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wizzap.ktwiz.co.kr",
      },
      {
        protocol: "http",
        hostname: "54.180.228.165",
      },
    ],
  },
};

export default nextConfig;

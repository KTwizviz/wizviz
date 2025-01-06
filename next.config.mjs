/** @type {import('next').NextConfig} */
const nextConfig = {
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

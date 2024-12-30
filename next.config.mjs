/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '54.180.228.165',
        port: '',
        pathname: '/api/static/**',
      },
    ],
  },
};

export default nextConfig;
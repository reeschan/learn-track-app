/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', '*.your-domain.com'],
      // Edge環境でサーバーアクションを実行しない
      allowedForwardedHosts: [],
    },
  },
}

module.exports = nextConfig 
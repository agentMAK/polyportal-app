/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.discordapp.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/learn',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

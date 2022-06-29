/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.discordapp.com'],
  },
  rewrites: async () => {
    return [
      {
        source: "/privacy-policy",
        destination: "/privacy-policy/index.html",
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/learn/web3-development',
        permanent: true,
      }
    ]
  },
}

module.exports = nextConfig

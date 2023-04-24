/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    esmExternals: true 
  },
  images: {
    domains: ['cdn.sanity.io']
  }
}

module.exports = nextConfig

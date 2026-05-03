/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/makkah',  destination: '/makkah-taxi-service',  permanent: true },
      { source: '/madinah', destination: '/madinah-taxi-service', permanent: true },
      { source: '/jeddah',  destination: '/jeddah-taxi-service',  permanent: true },
      { source: '/taif',    destination: '/taif-taxi-service',    permanent: true },
    ]
  },
}

module.exports = nextConfig

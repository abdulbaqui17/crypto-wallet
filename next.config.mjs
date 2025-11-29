/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.resolve.fallback = { fs: false, net: false, tls: false }
    
    // Ignore pino-pretty optional dependency warning
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    
    return config
  }
}

export default nextConfig

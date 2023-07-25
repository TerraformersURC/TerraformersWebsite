/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  images: {
    loader: 'akamai',
    path: '',
    unoptimized: true
  }
}

module.exports = nextConfig
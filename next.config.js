/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['uniquoneimg.s3.ap-northeast-2.amazonaws.com',"images.unsplash.com","media-photos.depop.com"],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig

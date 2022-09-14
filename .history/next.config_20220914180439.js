/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === "true",
})

module.exports = withBundleAnalyzer({
  compress :true,
  webpack(config){
    return config
  },
  swcMinify: true,
  reactStrictMode: true,
})



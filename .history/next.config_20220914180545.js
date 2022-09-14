/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === "true",
})

module.exports = withBundleAnalyzer({
  compress :true,
  webpack(config){
    console.log(config);
    let prod = process.env.NODE_ENV === "production
    return {
      ...config,
      mode : prod ? "pro"
  },
  swcMinify: true,
  reactStrictMode: true,
})



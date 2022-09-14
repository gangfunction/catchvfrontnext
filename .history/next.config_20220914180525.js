/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === "true",
})

module.exports = withBundleAnalyzer({
  compress :true,
  webpack(config){
    console.log(config);
    return {
      ...config,
      mode : prod ? "pro"
  },
  swcMinify: true,
  reactStrictMode: true,
})



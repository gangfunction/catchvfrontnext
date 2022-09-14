/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === "true",
})

module.exports = withBundleAnalyzer({
  compress :true,
  swcMinify: true,
  reactStrictMode: true,
  webpack(config){
    console.log(config);
    let prod = process.env.NODE_ENV === "production";
    return {
      ...config,
      mode : prod ? "production" : "development",
      devtool : prod ? "hidden-source-map" : "eval",
  },
  async headers() {
    return {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
      }
      }
      },
    })      



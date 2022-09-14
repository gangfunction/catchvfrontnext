/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === "true",
})

module.exports = withBundleAnalyzer({
  compress :true,
  swcMinify: true,

  webpack(config){
    console.log(config);
    let prod = process.env.NODE_ENV === "production";
    return {
      ...config,
      mode : prod ? "production" : "development",
      devtool : prod ? "hidden-source-map" : "eval",
  },
  reactStrictMode: true,
})



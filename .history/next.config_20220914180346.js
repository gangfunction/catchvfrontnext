/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === "true",
})

module.exports = withBundleAnalyzer({
  webpack(config,options){
    return config
  },
  swcMinify: true,
  reactStrictMode: true,

  env: {
    NEXT_API_KEY: "AIzaSyC0umWjshwolCPmaB9UoTkt3X3iM4yBDl4",
  }
})



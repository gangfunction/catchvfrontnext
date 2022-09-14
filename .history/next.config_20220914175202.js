/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: "/api/login",
          destination: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.NEXT_API_KEY}`,
        },
      ],
    };
  },
  env: {
    NEXT_API_KEY: "AIzaSyC0umWjshwolCPmaB9UoTkt3X3iM4yBDl4",
  }
}
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  
})


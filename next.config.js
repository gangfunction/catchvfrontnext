const dotenvLoad = require("dotenv-load");

dotenvLoad();

/** @type {import('next').NextConfig} */
const API_KEY = process.env.NEXT_API_KEY;
module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: "/api/login",
          destination: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
        },
      ],
    };
  },
};

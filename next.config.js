/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack5: true,
  webpack: (config)=>{
    config.resolve.fallback ={fs:false};
    return config;
  }
}

module.exports = nextConfig
module.exports ={
  env:{
    API_KEY:'AIzaSyC0umWjshwolCPmaB9UoTkt3X3iM4yBDl4'
  }
}
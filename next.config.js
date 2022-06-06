/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


module.exports = {
  publicRuntimeConfig: {
    // Will be available on both server and client
    backendUrl: process.env.API_HOST,
  },
}


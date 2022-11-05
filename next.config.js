/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: false,
  publicRuntimeConfig: {
    modifiedDate: new Date().toISOString(),
  },
};

module.exports = nextConfig;

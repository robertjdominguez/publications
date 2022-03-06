/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphcms.com"],
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;

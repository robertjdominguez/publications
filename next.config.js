/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "media.graphcms.com",
      "media.graphassets.com",
      "us-east-1.graphassets.com",
    ],
  },
  experimental: {
    scrollRestoration: true,
    workerThreads: false,
    cpus: 1,
  },
};

module.exports = nextConfig;

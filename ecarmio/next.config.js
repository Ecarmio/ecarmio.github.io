/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/my-nextjs-site', // Replace with your repo name
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ecarmio.github.io', // Replace with your repo name
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
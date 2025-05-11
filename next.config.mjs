/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'example-cdn.com',
      // Add other domains where your images are hosted
    ],
    unoptimized: true,
  },
  // Add this to prevent static generation of the checkout page
  experimental: {
    // This ensures the checkout page is rendered at request time
    appDir: true,
  },
};

export default nextConfig;

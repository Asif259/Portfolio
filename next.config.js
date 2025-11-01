/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
  },
  webpack: (config, { isServer }) => {
    // Fix for Swiper CSS imports
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;

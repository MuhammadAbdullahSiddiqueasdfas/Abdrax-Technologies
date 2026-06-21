/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow Next/Image optimization (webp/avif + resizing) for the remote
    // Unsplash photos used across hero / services / portfolio. Previously every
    // image used `unoptimized`, shipping full-resolution photos.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

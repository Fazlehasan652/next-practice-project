/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // hostname: "*",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;

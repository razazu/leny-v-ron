import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/config.yml",
        destination: "/api/config",
      },
    ];
  },
};

export default nextConfig;

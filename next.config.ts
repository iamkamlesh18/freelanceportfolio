import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/freelanceportfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
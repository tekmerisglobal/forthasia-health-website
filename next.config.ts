import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Next's built-in image optimizer doesn't run efficiently on Cloudflare
  // Workers (no native resizer available) — serve pre-sized files directly
  // from the edge instead, which is both faster and simpler.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

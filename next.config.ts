import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Next's built-in image optimizer doesn't run efficiently on Cloudflare
  // Workers (no native resizer available) — serve pre-sized files directly
  // from the edge instead, which is both faster and simpler.
  images: {
    unoptimized: true,
  },
  // One Standard URL. /the-standard was a short-lived working route for the
  // Facility Standard draft; the draft is now the body of /standard.
  async redirects() {
    // statusCode 301 explicitly — Next's `permanent: true` would emit a 308.
    return [{ source: "/the-standard", destination: "/standard", statusCode: 301 }];
  },
};

export default nextConfig;

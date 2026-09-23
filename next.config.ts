import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Middleware combines slash normalization with host and legacy redirects.
  skipTrailingSlashRedirect: true,
};

export default nextConfig;

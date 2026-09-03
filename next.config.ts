import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this folder so Next does not infer the parent
  // directory when another lockfile exists above it.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;

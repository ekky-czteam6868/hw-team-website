import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Monorepo-style layout: our package.json sits under a shared workspace
  // root that also contains other lockfiles. Pin tracing to this project so
  // the build does not try to trace the whole /opt/data tree.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;

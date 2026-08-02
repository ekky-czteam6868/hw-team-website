import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves this repo under /hw-team-website/. Without basePath
  // the static export emits root-absolute /_next/... URLs that 404.
  basePath: "/hw-team-website",
  // Monorepo-style layout: our package.json sits under a shared workspace
  // root that also contains other lockfiles. Pin tracing to this project so
  // the build does not try to trace the whole /opt/data tree.
  outputFileTracingRoot: __dirname,
  // Static export for the GitHub Pages live preview. All routes are static
  // (no server actions, no API routes), so the whole site ships as files.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;

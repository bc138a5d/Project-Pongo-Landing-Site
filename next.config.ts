import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Set at build time by deploy.sh from git short SHA — enables version-skew
  // protection if we ever run multiple instances behind a load balancer.
  deploymentId: process.env.DEPLOYMENT_VERSION,
  images: {
    localPatterns: [
      { pathname: "/logo.png", search: "?v=4" },
    ],
  },
};

export default nextConfig;

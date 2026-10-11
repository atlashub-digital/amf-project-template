import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@amf/project-config", "@amf/project-content"]
};

export default nextConfig;

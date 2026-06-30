import path from "node:path";
import type { NextConfig } from "next";
import("@opennextjs/cloudflare").then((m) =>
  m.initOpenNextCloudflareForDev()
);

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  output: "standalone",
};

export default nextConfig;

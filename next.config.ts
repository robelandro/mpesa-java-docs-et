import { NextConfig } from "next";
import nextra from "nextra";

const withNextra = nextra({
  search: true,
  defaultShowCopyCode: true,
});

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "github.com", protocol: "https" }],
  },
};

export default withNextra(nextConfig);

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["i.ytimg.com"], // 添加允许的域名
  },
};

export default nextConfig;

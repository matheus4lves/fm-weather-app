import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://restcountries.com/v3.1/alpha/**")],
  },
};

export default nextConfig;

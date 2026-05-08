import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "miflex-img-238640132216-us-east-2-an.s3.us-east-2.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      // Adicionando também um padrão mais genérico caso a URL venha num formato diferente
      {
        protocol: "https",
        hostname: "*.amazonaws.com",
        port: "",
        pathname: "/**",
      }
    ],
  },
};

export default nextConfig;

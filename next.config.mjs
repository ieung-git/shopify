/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://bbe80e-3.myshopify.com/:path*",
      },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },

  sassOptions: {
    prependData: `@import "./_mantine.scss";`,
  },
};

export default nextConfig;

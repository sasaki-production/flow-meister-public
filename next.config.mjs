/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'sasakiseisaku.shop', // ← これを追加！
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
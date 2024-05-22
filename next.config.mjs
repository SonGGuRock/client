/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'songgurock.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'default-workshop-thumbnail',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

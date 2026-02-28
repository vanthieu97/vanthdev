/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'crests.football-data.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.24h.com.vn',
        pathname: '/upload/livescore/**',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/c1', destination: '/champions-league', permanent: true },
      { source: '/en/c1', destination: '/en/champions-league', permanent: true },
    ];
  },
};

module.exports = nextConfig;

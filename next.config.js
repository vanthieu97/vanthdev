/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        source: '/sw.js',
        headers: [
          { key: 'Content-Type', value: 'application/javascript; charset=utf-8' },
          { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
        ],
      },
    ];
  },
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
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/vi/**',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        pathname: '/api/**',
      },
      {
        protocol: 'https',
        hostname: 'iguov8nhvyobj.vcdn.cloud',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cgv.vn',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.cgv.vn',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/c1', destination: '/champions-league', permanent: true },
      { source: '/en/c1', destination: '/en/champions-league', permanent: true },
      {
        source: '/film-reviews/thank-you-for-staying-awake-with-me',
        destination: '/film-reviews/cam-on-nguoi-da-thuc-cung-toi',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

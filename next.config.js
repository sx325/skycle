/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/@:handle',
        destination: '/handle/:handle'
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.bsky.app'
      }
    ]
  },
  webpack: (config) => {
    config.externals = [
      ...config.externals,
      {
        canvas: 'canvas'
      }
    ];

    return config;
  }
}

module.exports = nextConfig;

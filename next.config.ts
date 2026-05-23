import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/st-augustine-boat-rentals",
        destination: "/boat-rentals-st-augustine",
        permanent: true,
      },
      {
        source: "/st-augustine-sunset-cruises",
        destination: "/sunset-cruises-st-augustine",
        permanent: true,
      },
      {
        source: "/st-augustine-dolphin-tours",
        destination: "/dolphin-tours-st-augustine",
        permanent: true,
      },
      {
        source: "/st-augustine-nights-of-lights-boat-tours",
        destination: "/nights-of-lights-boat-tours",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

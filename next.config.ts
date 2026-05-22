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
        source: "/boat-rentals-st-augustine",
        destination: "/st-augustine-boat-rentals",
        permanent: true,
      },
      {
        source: "/sunset-cruises-st-augustine",
        destination: "/st-augustine-sunset-cruises",
        permanent: true,
      },
      {
        source: "/dolphin-tours-st-augustine",
        destination: "/st-augustine-dolphin-tours",
        permanent: true,
      },
      {
        source: "/nights-of-lights-boat-tours",
        destination: "/st-augustine-nights-of-lights-boat-tours",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

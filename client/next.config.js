module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
        port: "3000",
        pathname: "/f90/**",
      },
    ],
    unoptimized: true,
  },
};
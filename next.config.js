/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/cat",
        destination: "/cat-api",
        permanent: true,
      },
      {
        source: "/grades",
        destination: "/grade-calculator",
        permanent: true,
      },
      {
        source: "/safaripwd",
        destination: "/password-generator",
        permanent: true,
      },
      {
        source: "/api/cats/:path*",
        destination: "/api/cat/:path*",
        permanent: true,
      },
    ];
  },
};

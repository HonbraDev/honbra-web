/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/.well-known/matrix/:path*",
        destination: "https://matrix.honbra.com/.well-known/matrix/:path*",
        permanent: false,
      },
    ];
  },
};

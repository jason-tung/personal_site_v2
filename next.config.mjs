/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/resume.pdf",
        permanent: true, // Set to true for permanent redirect (308), false for temporary (307)
      },
    ];
  },
};

export default nextConfig;

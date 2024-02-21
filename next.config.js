/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      sharp: "commonjs sharp",
      canvas: "commonjs canvas",
    });
    return config;
  },
};
// export default nextConfig;

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   async headers() {
//     return [
//       {
//         source: '/',
//         headers: [
//           {
//             key: 'Cross-Origin-Embedder-Policy',
//             value: 'require-corp',
//           },
//           {
//             key: 'Cross-Origin-Opener-Policy',
//             value: 'same-origin',
//           },
//         ],
//       },
//     ];
//   },
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     // Modify webpack config here...
//     config.externals.push({
//       sharp: "commonjs sharp",
//       canvas: "commonjs canvas",
//     });
//     return config;
//   },
// };

// module.exports = nextConfig;



/** @type {import('next').NextConfig} */

let nextConfig;
if (process.env.NODE_ENV !== "production") {
  nextConfig = {
    // -------- Pour le dev avec Docker ----------
    output: "standalone",
    webpack: (config, _) => ({
      ...config,
      watchOptions: {
        ...config.watchOptions,
        poll: 800,
        aggregateTimeout: 300,
      },
    }),
    // -------------------------------------------
  };
} else {
  nextConfig = {};
}

module.exports = nextConfig;

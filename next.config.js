/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
    compiler: {
        removeConsole: true, // Remove console statements in production
    },
    async redirects() {
        return [
            {
                source: "/:path*", // Match all routes on the old website
                destination: "https://www.byjc.dev/", // Redirect to the new domain
                permanent: true, // Indicates a 308 permanent redirect
            },
        ];
    },
};

module.exports = withContentlayer({ ...nextConfig });

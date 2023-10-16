/** @type {import('next').NextConfig} */

// next.config.js
// import { withContentlayer } from 'next-contentlayer'

const { withContentlayer } = require("next-contentlayer")
const nextConfig = {
    compiler: {
        removeConsole: true,
    }
}

// export default withContentlayer({ nextConfig })
module.exports = withContentlayer({ ...nextConfig })

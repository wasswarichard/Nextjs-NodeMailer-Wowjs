/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    trailingSlash: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    optimizeFonts: false,
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },

    // env: {
    //     stripePublishableKey: 'pk_test_ZaZZWZGlvdIn12yFleIqyjSI00G4e18Kf7',
    //     stripeSecretKey: 'sk_test_2DqyjEwaU0Nq0PpEMVQ3qSAw00zgrbnfPk'
    // },
}

module.exports = nextConfig

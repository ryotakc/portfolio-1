/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "api.dicebear.com",
            }
        ],
    },
    async rewrites() {
        return [
        {
            source: '/float-animtion/',
            destination: process.env.FLOATANIME_URL,
        },
        {
            source: '/float-animation/:match*',
            destination: process.env.FLOATANIME_URL + ':match*',
        },
        ];
    },
};

export default nextConfig;

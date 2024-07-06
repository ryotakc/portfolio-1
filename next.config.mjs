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
        if (!process.env.FLOATANIME_URL) {
            throw new Error('FLOATANIME_URL environment variable is not set');
        }
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

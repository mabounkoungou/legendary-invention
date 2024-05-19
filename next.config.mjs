/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    images:{
        domains:["us-east-1-shared-usea1-02.graphassets.com","images.unsplash.com"],
        remotePatterns: [ {
            protocol: 'https',
            hostname: 'img.clerk.com',
            port: '',        
          },],
    },
};



export default nextConfig;

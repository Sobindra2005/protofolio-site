/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
            protocol: 'http',
            hostname: 'localhost',
            port: '3000',
            pathname: '/images/**', 
          }
        
        ,{
          protocol: 'https',
          hostname: 'i.pinimg.com',
          port: '', 
          pathname: '/**', 
        }
      ],
    },
  };
  
  export default nextConfig;
  
const nextConfig ={
    swcMinify: true,
    reactStrictMode: true,
    async rewrites(){
        return[
            {
                source:'/api/flask',
                destination: 'http://localhost:5001/image/test'
            }
        ]
    }
}
module.exports = nextConfig;

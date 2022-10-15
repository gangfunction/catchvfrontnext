const path = require('path');
const withImages = require('next-images');
module.exports = withImages({
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },
    compress: true,
    swcMinify: true,
    reactStrictMode: true,
    webpack(config) {
        console.log(config);
        let prod = process.env.NODE_ENV === "production";
        return {
            ...config,
            mode: prod ? "production" : "development",
            devtool: prod ? "hidden-source-map" : "eval"
        }
    }
})



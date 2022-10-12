module.exports = {
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
}



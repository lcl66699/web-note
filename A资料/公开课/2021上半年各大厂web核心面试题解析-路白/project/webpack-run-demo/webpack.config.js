module.exports = {
    entry: {
        main: "./src/index.js",
        other: "./src/multiply.js",
    },
    output: {
        filename: "[name].js",
    },

    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: "initial",
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0
                },
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    enforce: true
                }
            },
        }
    }
}
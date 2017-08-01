module.exports = {
    entry: ["./src/index.js"],
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
    },
    devtool: "source-map",
    devServer: {
      contentBase: "./dist",
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
};

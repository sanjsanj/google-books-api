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
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
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

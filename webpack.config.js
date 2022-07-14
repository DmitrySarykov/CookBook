const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./cookbook/src/index.js",
    output: {
        path: path.join(__dirname, "static/frontend/"),
        filename: "main.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: "./cookbook/src/index.html"
    //     })
    // ]
}
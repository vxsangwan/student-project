const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: {
        main: "./scripts/menu.js",
        students: "./scripts/student.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    devServer: {
        static: "dist",
        open: true,
        port: 8080,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader,
                     "css-loader",
                      "sass-loader"
                    ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./index.html",
            chunks: ["main"]
        }),
        new HtmlWebpackPlugin({
            filename: "create-student.html",
            template: "./create-student.html",
            chunks: ["students"]
        }),
        new HtmlWebpackPlugin({
            filename: "list-students.html",
            template: "./list-students.html",
            chunks: ["students"]
        })
    ]
};

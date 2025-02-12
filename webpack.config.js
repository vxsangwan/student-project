const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: {
        main: "./app/js/menu.js",
        students: "./app/js/student.js"
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
            template: "./app/index.html",
            chunks: ["main"]
        }),
        new HtmlWebpackPlugin({
            filename: "create-student.html",
            template: "./app/create-student.html",
            chunks: ["students"]
        }),
        new HtmlWebpackPlugin({
            filename: "list-students.html",
            template: "./app/list-students.html",
            chunks: ["students"]
        })
    ]
};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    // 配置环境
    mode: "development",

    devtool: "source-map",
    // 文件入口
    entry: {
        app: "./src/app.js",
    },
    // 文件的出口
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "app.js",
    },
    module: {
        rules: [{
            test: /\.art$/,
            use: {
                loader: "art-template-loader",
            },
        }, ],
    },
    // 配置文件
    plugins: [
        // 该插件将为你生成一个 HTML5 文件
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./public/index.html"),
            filename: "index.html",
            inject: true,
        }),
        // new CopyPlugin({
        //     patterns: [
        //         { from: "public/*.ico", to: path.resolve(__dirname, "./dist") },
        //     ],
        // }),
        // copy-webpack-plugin 的作用就是拷贝文件，或者文件夹 防止打包后找不到文件
        new CopyPlugin({
            patterns: [{
                from: "./public/*.ico",
                to: path.resolve(__dirname, "./dist"),
            }, ],
        }),
    ],
    // 配置server
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        compress: true,
        port: 9000,
    },
};
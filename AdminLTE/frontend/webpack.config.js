const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    // 配置环境
    mode: "development",

    devtool: "source-map",
    // 文件入口
    entry: {
        "js/app": "./src/app.js",
    },
    // 文件的出口
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name]-[hash:6].js",
    },
    // module: {
    //     rules: [{
    //         test: /\.art$/,
    //         loader: "art-template-loader",
    //     }, ],
    // },
    module: {
        rules: [{
                test: /\.tpl$/,
                use: {
                    loader: "html-loader",
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    // 配置文件
    plugins: [
        // 该插件将为你生成一个 HTML5 文件
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./public/index.html"),
            filename: "index.html",
            inject: true, //脚本写在那个标签里,默认是true(在body结束后)
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
                    to: path.resolve(__dirname, "./dist/favicon.ico"),
                },
                {
                    from: "./public/libs",
                    to: path.resolve(__dirname, "./dist/libs/"),
                },
            ],
        }),
        //删除之前打包的文件
        new CleanWebpackPlugin(),
    ],
    // 配置server
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        compress: true,
        port: 9000,
    },
};
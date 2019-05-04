const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const absPath = relPath => path.resolve(appDirectory, relPath);

const common = {
    mode: process.env.NODE_ENV,
    output: {
        path: path.resolve(__dirname, "build")
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 9000
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                loader: require.resolve('source-map-loader'),
                enforce: 'pre',
                include: absPath("src"),
            },
            {
                oneOf: [
                    {
                        test: /\.(js|jsx)$/,
                        include: absPath("src"),
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env']
                            }
                        }                    },
                    {
                        test: /\.(ts|tsx)$/,
                        include: absPath("src"),
                        use: ['ts-loader'],
                    },
                    {
                        test: /\.less$/,
                        use: ["style-loader", "css-loader", "less-loader"]
                    },
                    {
                        test: /\.css$/,
                        use: ["style-loader", "css-loader"]
                    },
                ],
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin(["public"])
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"]
    },
}

const testPage = {
    ...common,
    entry: {
        testReactComp: "./src/index.tsx"
    },
    output: {
        ...common.output,
        filename: "static/js/[name].[contenthash:8].js",
    },
    plugins: [
        ...common.plugins,
        new HtmlWebpackPlugin({
            filename: "index.html",
            inject: true,
            template: "./src/index.html",
        }),
    ]
}

module.exports = [testPage]

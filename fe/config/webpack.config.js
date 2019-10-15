const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ConfigBaseURL = require('./appConfig.js').ConfigBaseURL
const config = {
    mode: "development",
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    experimentalWatchApi: true
                }
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            }, {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jgp|svg)$/,
                loader: ['file-loader', 'url-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '我的第一个demo',
            filename: 'index.html',
            template: path.resolve(__dirname, '../index.ejs'),
            minify: {
                removeComments: true, // 移除html中的注释
                collapseWhitespace: true, // 删除html中的换行符和空白符
                minifyCSS: true // 压缩内联css
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        proxy:{
            '/api': {
                target: ConfigBaseURL,
                secure:false,
                changeOrigin: true
            }
        }
    }
}
module.exports = config;
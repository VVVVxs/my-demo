const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const config = {
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
                test: /\.(png|jpg|jpeg|svg)$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            },
            // {
            //     test: /\.(png|jpg|jpeg|svg)$/,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {
            //             name: 'images/[name]_[hash].[ext]',
            //             // publicPath: '/static/images/',
            //             // outputPath: 'images/',
            //             limit: 10,
            //         }
            //     },'url-loader']
            // },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            }, {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@images': path.resolve(__dirname, '../src/static/images'),
        }
    },
    optimization: {
        splitChunks: {
            chunks: "all", // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件
        },
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
}
module.exports = config;
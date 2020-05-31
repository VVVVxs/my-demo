
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const config = {
    mode: "production",
    devtool:"cheap-module-source-map",
    // devtool: 'source-map',
    // output: {
    //     publicPath: './',
    //     filename: '[name].[chunkhash].js',
    //     chunkFilename: '[id].[chunkhash].js'
    // },
    optimization: {
        minimize: true,
        minimizer: [
            // 压缩js
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    safe: true
                }
            }),
            new TerserPlugin({
                cache: true,
                parallel: true,
                extractComments: false,
            }),
        ],
    },
    plugins: [
        new TerserPlugin({ test: /\.tsx|\.jsx|\.js(\?.*)?$/i, }),
        new CleanWebpackPlugin()
    ],
}
module.exports = merge(config, commonConfig)
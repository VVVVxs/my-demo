const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const merge = require('webpack-merge');


const ConfigBaseURL = require('./appConfig.js').ConfigBaseURL
const config = {
    mode: "production",
    devtool: 'source-map',
    output: {
        publicPath: './',
        filename: '[name].[chunkhash].js',
        chunkFilename: '[id].[chunkhash].js'
    },
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
                sourceMap: true, 

            }),
        ],
    },
    plugins: [
        new TerserPlugin({ test: /\.tsx|\.jsx|\.js(\?.*)?$/i, }),
        new webpack.HotModuleReplacementPlugin()
    ],
}
module.exports = merge(config, commonConfig)
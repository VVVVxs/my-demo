const ConfigBaseURL = require('./appConfig.js').ConfigBaseURL
const commonConfig = require('./webpack.common.js');
const merge = require('webpack-merge');

const config = {
    mode: "development",
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    devServer: {
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: ConfigBaseURL,
                secure: false,
                changeOrigin: true
            }
        }
    }
}
module.exports = merge(config, commonConfig)
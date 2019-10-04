// development config
const merge = require('webpack-merge');
const commonConfig = require('./common');
const webpack = require('webpack');

module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin() // enable HMR globally
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
        host: '0.0.0.0',
        port: '3030',
        historyApiFallback: true
    }
});

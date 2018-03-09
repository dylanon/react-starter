const merge = require('webpack-merge');
const shared = require('./webpack.config.shared');
const webpack = require('webpack');

module.exports = merge(shared, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        // Less messages in the browser console
        clientLogLevel: 'warning',
        contentBase: './public',
        historyApiFallback: {
            disableDotRule: true
        },
        host: '0.0.0.0',
        hot: true,
        // Hide Webpack output (except for errors/warnings)
        noInfo: false,
        port: 3000,
        useLocalIp: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
});
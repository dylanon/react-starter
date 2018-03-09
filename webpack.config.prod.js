const merge = require('webpack-merge');
const shared = require('./webpack.config.shared');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(shared, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimize: true
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});
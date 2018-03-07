const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}

module.exports = {
    entry: './src/index.js',
    devServer: {
        // Less messages in the browser console
        clientLogLevel: 'error',
        contentBase: './public',
        historyApiFallback: {
            disableDotRule: true
        },
        host: '0.0.0.0',
        hot: true,
        // Hide Webpack output (except for errors/warnings)
        noInfo: true,
        port: 3000,
        useLocalIp: true
    },
    mode,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'eslint-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            title: 'App',
            template: './public/index.html'
        })
    ]
}
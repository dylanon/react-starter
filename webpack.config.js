const path = require('path');
const webpack = require('webpack');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}

module.exports = {
    entry: './src/index.js',
    devServer: {
        contentBase: './public',
        compress: true,
        host: '0.0.0.0',
        hot: true,
        port: 3000,
        quiet: true,
        useLocalIp: true
    },
    mode,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
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
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
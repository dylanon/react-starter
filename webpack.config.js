const path = require('path');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}

module.exports = {
    entry: './src/index.js',
    devServer: {
        contentBase: './public'
    },
    mode,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}
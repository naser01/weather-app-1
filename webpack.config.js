const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/JS/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'JS/bundle.js'
    },
    devServer: {
        contentBase: './dist',
        port: 8080
        // Send API requests on localhost to API server get around CORS.
        /*proxy: {
           '/api': {
              target: {
                 host: "0.0.0.0",
                 protocol: 'http:',
                 port: 8080
              },
              pathRewrite: {
                 '^/api': ''
              }
           }
        }*/
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}
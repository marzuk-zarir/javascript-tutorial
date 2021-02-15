const path = require('path')
const webpackHtmlPlugin = require('html-webpack-plugin')
require('babel-register')

module.exports = {
    entry: ['@babel/polyfill', './src/scripts/index.js'],
    
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: ['babel-loader']
            }
        ]
    },

    plugins: [
        new webpackHtmlPlugin({
            template: './src/index.html'
        })
    ],

    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        contentBase: './dist'
    }
}
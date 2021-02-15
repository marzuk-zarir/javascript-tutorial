const path = require('path');
const WebpackHtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')
const mode = 'development'

module.exports = {
    entry: ['@babel/polyfill', './src/scripts/index.js'],
    mode: mode,
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        port: 3000,
        open: true,
    },
    devtool: 'source-map',
    plugins: [
        new WebpackHtmlPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.min.css',
            chunkFilename: '[id].min.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: 'babel-loader'
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                use: [
                    {loader: 'file-loader', options: {outputPath: './fonts', name: '[name].[ext]'}}
                ]
            },
            {
                test: /\.(png|ico|jpe?g)$/i,
                use: [
                    {loader: 'file-loader', options: {outputPath: './assets/images', name: '[name].[ext]'}}
                ]
            },
            {
                test: /\.(gif|webm|mkv|mp4)$/i,
                use: [
                    {loader: 'file-loader', options: {outputPath: './assets/video', name: '[name].[ext]'}}
                ]
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader, options: {publicPath: ''}},
                    {loader: 'css-loader', options: {sourceMap: true}},
                    {loader: 'postcss-loader'},
                    {loader: 'sass-loader', options: {sourceMap: true}},
                ],
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
          new CssMinimizerPlugin({
            test: /.css$/i,
          }),
        //  // for minify javascript file but it is served too late...
        //   new TerserPlugin({
        //     test: /\.js(\?.*)?$/i,
        //   }),
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
};
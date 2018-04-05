var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
var WebpackVisualizerPlugin = require('webpack-visualizer-plugin');

var CommonLoaders = require('./common/loaders.js');

var language = require('../assets/data/language.json');

var config = {
    entry: {
      main: [
        './src/loader.js',
        './src/style/all.scss'
      ]
    },
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].[hash].js',
    },
    resolve: {
        extensions: ['.js', '.json', '.json5', '.scss', '.tpl.html'],
        modules: [path.resolve(__dirname, '..', 'src'), 'node_modules'],
    },
    node: { Buffer: false },
    module: {
        rules: [
            ...CommonLoaders
        ]
    },
    plugins: [

        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: './src/template/index.tpl.html',
            chunks: ['main'],
            filename: 'index.html',
            data: language['en_UK'],
            inlineSource: /\.css$/
        }),
        new HtmlWebpackInlineSourcePlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: true
        //     }
        // }),
        new WebpackVisualizerPlugin({
            filename: '../webpack/stats.html'
        })
    ],
    devtool: 'nosources-source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8000
    }
};

module.exports = config;

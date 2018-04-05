var path = require('path');
var fs = require('fs');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var CommonLoaders = require('./common/loaders.js');
var WebpackVisualizerPlugin = require('webpack-visualizer-plugin');

var language = require('../assets/data/language.json');
var config = {
    entry: {
        main: './src/loader.js'
    },
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].[hash].js',
    },
    resolve: {
        extensions: ['.js', '.json', '.json5', '.scss', '.tpl.html'],
        modules: [path.resolve(__dirname, '..', 'src'), 'node_modules', path.resolve(__dirname, 'node_modules/foundation-sites')],
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
        new HtmlWebpackPlugin({
            template: './src/template/services.tpl.html',
            chunks: ['main'],
            filename: 'services.html',
            data: language['en_UK'],
            inlineSource: /\.css$/
        }),
        new HtmlWebpackInlineSourcePlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:8000' }),
        new WebpackVisualizerPlugin({
            filename: '../webpack/stats.html'
        })
    ],
    devtool: 'inline-source-map', //'cheap-eval-source-map',
    devServer: {
        contentBase: [path.join(__dirname, "..", "dist"), path.join(__dirname, "..", "public")],
        compress: true,
        historyApiFallback: true,
        port: 8000
    }
};

module.exports = config;

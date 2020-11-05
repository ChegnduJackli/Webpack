//  const path = require('path');
//  const CleanWebpackPlugin = require('clean-webpack-plugin');
//  const HtmlWebpackPlugin = require('html-webpack-plugin');

//  module.exports = {
//    entry: {
//      app: './src/index.js'
//    },
//    plugins: [
//      new CleanWebpackPlugin(['dist']),
//      new HtmlWebpackPlugin({
//        title: 'Production'
//      })
//    ],
//    output: {
//      filename: '[name].bundle.js',
//      path: path.resolve(__dirname, 'dist')
//    }
//  };

const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
//下面是5.0新版本语法
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

//启用 HMR 模块热替换
const webpack = require('webpack');

module.exports = {
    //entry: "./src/index.js",
    entry: {
        app: './src/index.js',
        print: './src/print.js',
        another: './src/another-module.js'
    },
    //webpack-dev-server 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)。让我们设置以下：
    //以上配置告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。
    //npm start
    //   devtool: 'inline-source-map',
    //   devServer: {
    //     contentBase: './dist',
    //     hot: true
    //   },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },

    plugins: [
        new CleanWebpackPlugin(), //清理dist文件夹
        new HtmlWebpackPlugin({
            title: 'Production'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
 
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },

    output: {
        //filename: "bundle.js",
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist"),
        publicPath: '/' //npm run server
    },

};
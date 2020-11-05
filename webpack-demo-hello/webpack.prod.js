 const WebpackMerge = require('webpack-merge');
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 const common = require('./webpack.common.js');
 const webpack = require('webpack');

 //merge新用法
 //https://www.jianshu.com/p/5eda1ee100e3
 module.exports = WebpackMerge.merge(common, {
     devtool: 'source-map',
     plugins: [
         //  new UglifyJSPlugin()
         new UglifyJSPlugin({
             sourceMap: true
         }),
         new webpack.DefinePlugin({
             'process.env.NODE_ENV': JSON.stringify('production')
         })
     ]
 });

 //  "scripts": {
 //     "test": "echo \"Error: no test specified\" && exit 1",
 //     "build": "webpack",
 //     "start": "webpack-dev-server --open",
 //     "startDev": "webpack-dev-server --open --config webpack.dev.js",
 //     "buildProd": "webpack --config webpack.prod.js",
 //     "server": "node server.js"
 //   },
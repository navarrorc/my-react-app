/*Config for Production*/
// Webpack for Production (minified) and sourcemaps
var dirPath = './builds/prod/';
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = exports = Object.create(require('./webpack.config.js'));
exports.plugins = [];
exports.plugins.push(new ExtractTextPlugin('styles.min.css'));
exports.plugins = exports.plugins.concat(
  new webpack.optimize.UglifyJsPlugin()
);
exports.devtool = 'sourcemap'; // turn on sourcemaps
exports.output = Object.create(
  {
    path: dirPath,
    filename: 'bundle.js'}
  );
exports.output.filename = exports.output.filename.replace(/\.js$/, '.min.js');

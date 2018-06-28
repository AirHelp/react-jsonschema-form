const resolve = require('path').resolve;
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './playground/app',
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('styles.css', { allChunks: true }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          resolve(__dirname, 'src'),
          resolve(__dirname, 'playground'),
          resolve(__dirname, 'node_modules', 'codemirror', 'mode', 'javascript'),
        ],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader'),
        include: [
          resolve(__dirname, 'css'),
          resolve(__dirname, 'playground'),
          resolve(__dirname, 'node_modules'),
        ],
      }
    ]
  }
};

const resolve = require('path').resolve;
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  entry: [
    './playground/app'
  ],
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          resolve(__dirname, 'src'),
          resolve(__dirname, 'playground'),
          resolve(__dirname, 'node_modules', 'codemirror', 'mode', 'javascript'),
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: [
          resolve(__dirname, 'css'),
          resolve(__dirname, 'playground'),
          resolve(__dirname, 'node_modules'),
        ],
      }
    ]
  }
};

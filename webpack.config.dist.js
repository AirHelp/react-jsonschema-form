const resolve = require('path').resolve;
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  context: resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: resolve(__dirname, 'dist'),
    filename: 'react-jsonschema-form.js',
    library: 'JSONSchemaForm',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  devtool: 'source-map',
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};

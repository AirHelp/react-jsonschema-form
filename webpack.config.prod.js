var path = require("path");
var webpack = require("webpack");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: "./playground/app",
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin({filename: "styles.css", allChunks: true}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          "babel-loader",
        ],
        include: [
          resolve(__dirname, 'src'),
          resolve(__dirname, 'playground'),
          resolve(__dirname, 'node_modules', 'codemirror', 'mode', 'javascript'),
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
        include: [
          resolve(__dirname, 'css'),
          resolve(__dirname, 'playground'),
          resolve(__dirname, 'node_modules'),
        ],
      }
    ]
  }
};

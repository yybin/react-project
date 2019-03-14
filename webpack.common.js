const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader','css-loader', 'less-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|gif|jpg|jpeg|woff|eot|ttf|svg)$/,
        exclude: /node_modules/,
        loader: 'url-loader',
        options: {
            name: 'img/[name].[ext]',
            limit: 1024
        }
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new webpack.BannerPlugin({
      banner: 'hello world'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ]
}
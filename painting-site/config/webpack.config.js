const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const webpack = require('webpack'); 
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
    pathinfo: true,
    publicPath: 'https://sarahnessa.art/'
  },
   module: {
    rules: [
      { 
      	test: /\.css$/, use: 'css-loader',
        use: 'babel-loader'
       }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
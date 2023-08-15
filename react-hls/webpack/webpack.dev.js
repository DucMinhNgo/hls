const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'development',
  entry: './example/index.tsx',
  devtool: 'inline-source-map',
  devServer: {
    port: 8000,
    open: true,
    historyApiFallback: true,
    contentBase: 'public',
    host: '0.0.0.0',
    public: 'localhost:8000',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
    }),
  ],
});

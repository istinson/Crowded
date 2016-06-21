// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//look at docs and update to include html webpack! (this will allow you to delete the style folder from dist)
module.exports = {
  entry: [
    './src/client/index.js'
  ],
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'crowdedCafe',
      template: 'client/index.html',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('style.css')
  ],
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },

/*
module: {
    loaders: [
      {
        test : /\.js?/,
        include : APP_DIR,
        loader : 'babel'
      },
      {
        test: /\.css$/,
        include: APP_DIR,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      { 
        test: /\.(png|jpg)$/,
        include: APP_DIR,
        loader: 'url-loader?limit=8192' 
      }
    ]
  }

*/

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
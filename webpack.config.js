'use strict'

const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: path.join(__dirname, 'bundles'),
  entry: {
    main: './main/main.js',
    profile: './profile/profile.js',
    hr: './hr/hr.js',
    companies: './companies/companies.js',
    relationship: './relationship/relationship.js'
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      // ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /(\.png$)|(\.jpg$)|(\.jpeg$)/,
        loader: 'file-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        query: {
          partialDirs: [
            path.join(__dirname, 'blocks')
          ]
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.UglifyJsPlugin()
  ]
}

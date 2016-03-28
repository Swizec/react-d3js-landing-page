var path = require('path');
var webpack = require('webpack');

module.exports = {
  //devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),

    new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: true
        }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.js|\.jsx$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.js|\.jsx?/,
      loaders: ['babel'],
      include: path.join(__dirname, 'node_modules/react-examples-gallery')
    },
      {
        test: /\.less$/,
        loader: "style!css!less"
      }]
  }
};

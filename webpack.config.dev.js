import path from 'path';
import webpack from 'webpack';

export default {
  devtool: '#eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
  ],
  output: {
    path: '/',
    publicPath: '/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'client'),
          path.join(__dirname, 'server/shared')
        ],
        loaders: [ 'react-hot', 'babel' ]
      }, 
      {
        test: /\.css$/,  
        include: [
          path.join(__dirname, 'client')
        ],  
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    extentions: [ '', '.js' ]
  },
  node: {
    net: 'empty',
    dns: 'empty'
  }
}
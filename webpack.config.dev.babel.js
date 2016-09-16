import path from 'path';
import webpack from 'webpack';
import DashboardPlugin from 'webpack-dashboard/plugin';

export default {
   devtool: 'cheap-module-eval-source-map',
   entry: [
      'webpack-hot-middleware/client',
      './src/index',
   ],
   output: {
      path: path.join(__dirname, 'dist'),
      filename: 'main.js',
   },
   module: {
      loaders: [
         { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
         { test: /\.html$/, loader: 'file?name=[name].html' },
      ],
   },
   plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new DashboardPlugin(),
   ],
   progress: true,
   resolve: {
      modulesDirectories: [
         'node_modules',
      ],
      extensions: ['', '.js', '.jsx'],
   },
   watch: true,
};

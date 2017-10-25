import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const devServerConfigObj = {
  contentBase: path.join(__dirname),
  hot: true,
  watchContentBase: true,
};

export default {
  entry: path.resolve('src/app/app.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('src/public/dist'),
  },
  devServer: devServerConfigObj,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve('src/public/dist')]),
    new HtmlWebpackPlugin({
      template: path.resolve('src/app/template.ejs'),
      title: 'AngularJS App',
      options: {
        attrs: false,
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  watch: true,
};

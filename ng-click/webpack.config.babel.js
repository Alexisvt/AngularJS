import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

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
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
        exclude: /(node_modules)/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve('src/public/dist')]),
    new ExtractTextPlugin('style.css'),
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

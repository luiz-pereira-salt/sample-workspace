const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = (env) => ({
  entry: './src/index',
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false,
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'root.js',
    libraryTarget: 'system',
    publicPath: 'http://localhost:9002',
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('@babel/preset-react')],
        },
      },
      {
        test: /\.md$/,
        loader: 'raw-loader',
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'home',
      library: { type: 'var', name: 'home' },
      filename: 'remoteEntry.js',
      remotes: {
        colonies: 'colonies',
      },
      exposes: {
        root: './src/index',
      },
      shared: [],
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './public/index.html',
      templateParameters: {
        isDev: env.isDev,
        orgName: 'dinasty',
      },
    }),
  ],
});

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const wpconfig = {
  entry: {
    main: [
      './src/index.js',
    ],
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: isProd ? '/' : 'http://localhost:8080/',
    filename: 'bootstrap-poc.js',
    library: 'BootstrapPoc',
  },
  devtool: isProd ? false : 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProd,
              minimize: isProd
            },
          },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ]
      },
      {
        test: /\.woff(2)?(\?[a-z0-9=]+)?$/,
        loader: 'url-loader',
        options: {
          limit: 64000,
        },
      },
      {
        test: /\.(ttf|eot|svg)(\?[a-z0-9=]+)?$/,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.scss'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    new webpack.LoaderOptionsPlugin({
      debug: !isProd,
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        sassLoader: {
          includePaths: [
            path.resolve(__dirname, 'node_modules'),
          ],
        },
        context: '/',
      }
    })
  ],
  devServer: {
    hot: !isProd,
    publicPath: '/',
    historyApiFallback: true,
  },
};

if (!isProd) {
  wpconfig.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    ...wpconfig.plugins,
  ];
} else {
  wpconfig.plugins = [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new webpack.optimize.UglifyJsPlugin(),
    ...wpconfig.plugins,
  ];
}

module.exports = wpconfig;

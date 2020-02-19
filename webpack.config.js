const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.ENV === 'development';

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: {
    PNotify: path.resolve(__dirname, 'src', 'PNotifyCore.js'),
    PNotifyAnimate: path.resolve(__dirname, 'src', 'PNotifyAnimate.js'),
    PNotifyBrightTheme: path.resolve(__dirname, 'src', 'PNotifyBrightTheme.css'),
    PNotifyButtons: path.resolve(__dirname, 'src', 'PNotifyButtons.js'),
    PNotifyConfirm: path.resolve(__dirname, 'src', 'PNotifyConfirm.js'),
    PNotifyDesktop: path.resolve(__dirname, 'src', 'PNotifyDesktop.js'),
    PNotifyMaterial: path.resolve(__dirname, 'src', 'PNotifyMaterial.css'),
    PNotifyMobile: path.resolve(__dirname, 'src', 'PNotifyMobile.js'),
    PNotifyReference: path.resolve(__dirname, 'src', 'PNotifyReference.js')
    // 'PNotify.bundle': path.resolve(__dirname, 'src', 'PNotify.bundle.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'umd'),
    filename: '[name].js',
    library: ['[name]']
  },
  externals: {
    './PNotifyCore': 'PNotify'
  },
  optimization: {
    usedExports: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../[name].css',
      chunkFilename: '../[id].css'
    })
  ],
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.html', '.css']
  },
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        exclude: /\/node_modules\//,
        use: {
          loader: 'svelte-loader',
          options: {
            dev: devMode,
            emitCss: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [
                '@babel/transform-classes',
                {
                  builtins: ['Error']
                }
              ]
            ]
          }
        }
      }
    ]
  }
};

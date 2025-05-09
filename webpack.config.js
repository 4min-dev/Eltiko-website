const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // Импортируем плагин

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true, // Удаляет старые файлы при каждой сборке
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,  // Использование плагина для извлечения стилей
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[hash].[ext]',  // Генерация уникальных имен файлов с хешем
              outputPath: 'images/', // Папка для изображений
              publicPath: 'images/', // Публичный путь для использования в HTML
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[hash].[ext]',  // Генерация уникальных имен для шрифтов
              outputPath: 'fonts/', // Папка для шрифтов
              publicPath: 'fonts/', // Публичный путь для использования в CSS
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',  // Хеширование для CSS файлов
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public', 'icons'),
          to: path.resolve(__dirname, 'build', 'icons'),
        },
        {
          from: path.resolve(__dirname, 'public', 'images'),
          to: path.resolve(__dirname, 'build', 'images'),
        },
      ],
    }),
  ],
  mode: 'development',  // Используем development режим для работы на локальном сервере
};

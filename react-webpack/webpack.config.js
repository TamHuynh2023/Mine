const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports =  {
  entry: "./src/index.js", // Dẫn tới file index.js ta đã tạo
  // output: {
  //   filename: '[name].[contenthash].js',
  //   path: path.join(__dirname, "/build"), // Thư mục chứa file được build ra
  //    // Tên file được build ra
  // },
  output: {
    filename: "[name].[hash].js",
    path: path.join(__dirname, "build"),
    publicPath: "/",
    clean: true,
    assetModuleFilename: '[file]'
  },

  module: {
    rules: [
      {
        test: /\.js$/, // Sẽ sử dụng babel-loader cho những file .js
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        use: ["babel-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|pdf)$/i,
          type: 'asset/resource'
      },
      {
        test: /\.s[ac]ss|css$/, // Sử dụng style-loader, css-loader cho file .css
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  // Chứa các plugins sẽ cài đặt trong tương lai
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
        template: "./public/index.html"
      }),
      new BundleAnalyzerPlugin()  
  ],
  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, 'build'),
  //   },
  //   compress: true,
  //   port: 9000,
  //   open: true,
  //   hot: true
  // },
};

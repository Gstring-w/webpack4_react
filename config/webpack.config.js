const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const Webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require("glob-all");
const PurifyCSSPlugin = require("purifycss-webpack"); //css tree
const WebpackDeepScopeAnalysisPlugin = require("webpack-deep-scope-plugin")
  .default;

// const ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin"); // serviceWorker

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.scss/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("autoprefixer")()]
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  devServer: {
    hot: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      path: path.resolve(__dirname, "./dist")
    }),
    new PurifyCSSPlugin({
      paths: glob.sync([
        path.join(__dirname, "../src/*.html"),
        path.join(__dirname, "../src/*.js")
      ])
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    // new ServiceWorkerWebpackPlugin({
    //   entry: path.join(__dirname, "./sw.js")
    // }),
    new CleanWebpackPlugin(),
    new Webpack.HotModuleReplacementPlugin(),
    new WebpackDeepScopeAnalysisPlugin()
  ]
};

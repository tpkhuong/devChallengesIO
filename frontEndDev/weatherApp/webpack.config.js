const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./frontend/index.js",
  module: {
    rules: [
      { test: /\.html$/, use: { loader: "html-loader" } },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { modules: true } },
        ],
      },
      { test: /\.(js|jsx)$/, use: { loader: "babel-loader" } },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./frontend/index.html",
    }),
    new Dotenv(),
  ],
  mode: "development",
};

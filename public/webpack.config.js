const WebpackPwaManifest = require("webpack-pwa-manifest");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
// path module
const webpack = require("webpack");
const path = require("path");

// exporting module
module.exports = {
  entry: "./js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  mode: "development",
};

new WebpackPwaManifest({
  name: "Transactions Tracker",
  short_name: "Purchase Tracker",
  description: "An app that allows you to view purchases in a graph",
  start_url: "./index.html",
  background_color: "#01579b",
  theme_color: "#ffffff",
  fingerprints: false,
  inject: false,
  icons: [
    {
      src: path.resolve("./icons/icon-512x512.png"),
      sizes: [96, 128, 192, 256, 384, 512],
      destination: path.join("assets", "icons"),
    },
  ],
});

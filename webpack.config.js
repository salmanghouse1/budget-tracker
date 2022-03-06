const WebpackPwaManifest = require("webpack-pwa-manifest");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
// path module
const path = require("path");

// exporting module
module.exports={
    entry: './assets/idb.js',
    output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'idb.js'
},
};


// plugins: [
//   new webpack.ProvidePlugin({
//     $: "jquery",
//     jQuery: "jquery",
    
//   }),
//   new BundleAnalyzerPlugin({
//     analyzerMode: "static", // the report outputs to an HTML file in the dist folder
//   })
// ],    
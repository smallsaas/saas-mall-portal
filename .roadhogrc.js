import 'babel-polyfill';

export default {
  "entry": ['babel-polyfill', "src/index.js"],
  "disableCSSModules": false,
  "publicPath": "./",
  "outputPath": "./dist",
  "autoprefixer": null,
  "proxy": null,
  "extraBabelPlugins": [
    "transform-runtime",
  ],
  "devtool": false,
}

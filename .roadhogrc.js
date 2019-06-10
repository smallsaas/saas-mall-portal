import 'babel-polyfill';

export default {
  "entry": ['babel-polyfill', "src/index.js"],
  "disableCSSModules": false,
  "autoprefixer": null,
  "proxy": null,
  "extraBabelPlugins": [
    "transform-runtime",
  ]
}

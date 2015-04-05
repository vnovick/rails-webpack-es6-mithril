var sharedConf = require("./webpack.shared.config");
sharedConf.entry = "./scripts/application.es6";
sharedConf.output = {
  filename: "webpack-bundle.js",
  path: './app/assets/javascripts/',
  publicPath: '/assets/'
};
module.exports = sharedConf;

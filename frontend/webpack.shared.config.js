var path = require("path");

module.exports = {
  context: __dirname, // the project dir
  resolve: {
    root: [
      path.join(__dirname, "scripts"),
    ],
    extensions: ["", ".es6", ".webpack.js", ".web.js", ".js", ".jsx", ".scss", ".css", "config.js"]
  },
  module: {
    loaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: 'babel-loader?optional=runtime'
      }
    ]
  },
};
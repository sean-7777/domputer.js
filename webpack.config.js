const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    library: {
      name: "Domputer",
      type: "umd",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)|(\.test\.js)/,
        use: "babel-loader",
      },
    ],
  },
  mode: "production",
};

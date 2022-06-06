const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isProduction = env.production === true;
  return {
    entry: "./src/app.js",
    output: {
      // path: path.join(__dirname, "public", "dist"),
      path: path.join(__dirname, "public"),
      filename: "bundle.js",
    },
    mode: "development",
    plugins: [new MiniCssExtractPlugin({ filename: "styles.css" })],
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: "/node_modules/",
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
        // publicPath: "/dist/",
      },
      historyApiFallback: true,
    },
  };
};

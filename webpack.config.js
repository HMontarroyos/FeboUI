const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/components/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "febo-ui.js", 
    library: "febo-ui",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "this",
    libraryExport: "default", 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

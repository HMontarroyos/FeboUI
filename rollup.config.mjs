import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import image from "rollup-plugin-image-files";
import babel from "@rollup/plugin-babel";
import replace from "rollup-plugin-replace";

export default {
  input: "./src/components/index.tsx",
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs({
      include: /node_modules/,
    }),
    typescript({
      declaration: true,
      declarationMap: true,
      declarationDir: "dist/types",
    }),
    babel({
      babelHelpers: 'bundled',
      presets: [
        ["@babel/preset-env", { modules: false }],
        "@babel/preset-react",
      ],
      plugins: ["babel-plugin-styled-components"],
    }),
    image(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.NODE_DEBUG': false,
      'process.platform': JSON.stringify('browser'),
      'process': 'undefined'
    }),
  ],
  external: ["react", "react-dom"],
};

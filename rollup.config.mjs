import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import image from "rollup-plugin-image-files";
import babel from "@rollup/plugin-babel";

export default {
  input: "./src/components/index.tsx",
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      declaration: true,
      declarationMap: true,
      declarationDir: "dist/types",
    }),
    babel({
      presets: [
        ["@babel/preset-env", { modules: false }],
        "@babel/preset-react",
      ],
      plugins: ["babel-plugin-styled-components"],
    }),
    image(),
  ],
  external: ["react", "react-dom"],
};

import esbuild from "rollup-plugin-esbuild";
import vue from "rollup-plugin-vue";
import scss from "rollup-plugin-scss";
import dartSass from "sass";
import { terser } from "rollup-plugin-terser";

export default {
  // 入口文件
  input: "src/lib/index.ts",
  // 输出文件
  output: [
    {
      globals: {
        vue: "Vue",
      },
      name: "Dream",
      file: "dist/lib/dream.js",
      format: "umd",
      plugins: [terser()],
    },
    {
      name: "Dream",
      file: "dist/lib/dream.esm.js",
      format: "es",
      plugins: [terser()],
    },
  ],
  // es 6 以下不支持
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === "production",
      target: "es2015",
    }),
    vue({
      include: /\.vue$/,
    }),
  ],
};

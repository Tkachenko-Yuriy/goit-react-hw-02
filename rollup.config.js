import css from "rollup-plugin-css-only";

export default {
  plugins: [css({ output: "dist/bundle.css" })],
};

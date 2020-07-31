import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
    input: "src/_scripts/app.js",
    output: {
        dir: "src/scripts",
        entryFileNames: "[name].js",
        format: "iife",
        name: "app",
        sourcemap: true,
    },
    plugins: [nodeResolve(), terser()],
};

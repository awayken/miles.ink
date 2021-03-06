import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
    input: "src/_scripts/app.js",
    output: {
        dir: "src/scripts",
        entryFileNames: "[name].js",
        format: "es",
        name: "app",
    },
    plugins: [nodeResolve()],
};

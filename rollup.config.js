export default {
    input: "src/_scripts/app.js",
    output: {
        dir: "src/scripts",
        entryFileNames: "[name].js",
        format: "iife",
        name: "app",
    },
};

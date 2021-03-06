// Eleventy Configuration

const pluginPWA = require("eleventy-plugin-pwa");

const monthsLong = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const monthsShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
];

module.exports = function (eleventyConfig) {
    // {{ variable | jsonify }}
    eleventyConfig.addFilter("jsonify", function (variable) {
        return JSON.stringify(variable);
    });

    // {{ variable | log }}
    eleventyConfig.addFilter("log", function (variable) {
        console.log(variable);
    });

    // {{ arrayVariable | sentence }}
    eleventyConfig.addFilter("sentence", function (arrayVariable) {
        return arrayVariable.join(" ");
    });

    const makeIntoCSTDate = (dateVariable) =>
        dateVariable.getDate ? dateVariable : new Date(`${dateVariable} CST`);

    const makeShortDate = (dateVariable) => {
        dateVariable = makeIntoCSTDate(dateVariable);

        return `${dateVariable.getDate()} ${monthsShort[dateVariable.getMonth()]} ${dateVariable.getFullYear()}`;
    };

    const makeLongDate = (dateVariable) => {
        dateVariable = makeIntoCSTDate(dateVariable);

        return `${dateVariable.getDate()} ${monthsLong[dateVariable.getMonth()]} ${dateVariable.getFullYear()}`;
    };

    // {{ dateVariable | shortdate }}
    eleventyConfig.addFilter("shortdate", makeShortDate);

    // {{ dateVariable | longdate }}
    eleventyConfig.addFilter("longdate", makeLongDate);

    // {{ array | where: key,value }}
    eleventyConfig.addFilter("where", function (array, key, value) {
        return array.filter((item) => {
            const keys = key.split(".");
            const reducedKey = keys.reduce((object, key) => {
                return object[key];
            }, item);

            return reducedKey === value ? item : false;
        });
    });

    // Shortcodes

    // {% buildTime %}
    eleventyConfig.addShortcode("buildTime", function () {
        const dateTime = new Date();

        return dateTime.toUTCString();
    });

    // {% buildDate "format" %}
    eleventyConfig.addShortcode("buildDate", function (format) {
        const dateTime = new Date();

        if (format === 'short') {
            return makeShortDate(dateTime);
        } else if (format === 'long') {
            return makeLongDate(dateTime);
        } else if (format === 'year') {
            return dateTime.getFullYear();
        }

        return dateTime.toUTCString();
    });

    // {% linkToItem "item-slug", collection %}
    eleventyConfig.addShortcode("linkToItem", function (
        itemSlug,
        collection = []
    ) {
        const itemData =
            collection.find((item) => item.fileSlug === itemSlug) || {};

        return itemData.url || `/${itemSlug}.html`;
    });

    // Collections

    eleventyConfig.addCollection("news", (collection) => {
        return collection
            .getFilteredByGlob("src/posts/*.md")
            .sort((a, b) => b.date - a.date);
    });

    eleventyConfig.addCollection("nav", (collection) => {
        return collection
            .getFilteredByTag("page")
            .sort(
                (item1, item2) => item1.data.nav_order - item2.data.nav_order
            );
    });

    // Copy the asset directories to the compiled site folder
    eleventyConfig.addPassthroughCopy("src/files");
    eleventyConfig.addPassthroughCopy("src/scripts");
    eleventyConfig.addPassthroughCopy("src/styles");
    eleventyConfig.addPassthroughCopy({ "src/favicons": "/" });

    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
        excerpt_separator: "<!--more-->",
    });

    // Plugins

    eleventyConfig.addPlugin(pluginPWA, {
        swDest: "dist/sw.js",
        globDirectory: "dist",
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: [
            "**/*.{html,jpg,png,pdf,xml,css,js,json,svg,epub,mobi,txt}",
        ],
    });

    return {
        dir: {
            input: "src",
            output: "dist",
        },
    };
};

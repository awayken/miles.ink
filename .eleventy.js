// Eleventy Configuration

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
    eleventyConfig.addFilter('jsonify', function (variable) {
        return JSON.stringify(variable);
    });

    // {{ dateVariable | shortdate }}
    eleventyConfig.addFilter("shortdate", function (dateVariable) {
        return `${dateVariable.getDate()} ${
            monthsShort[dateVariable.getMonth()]
        } ${dateVariable.getFullYear()}`;
    });

    // {{ dateVariable | longdate }}
    eleventyConfig.addFilter("longdate", function (dateVariable) {
        return `${dateVariable.getDate()} ${
            monthsLong[dateVariable.getMonth()]
        } ${dateVariable.getFullYear()}`;
    });

    // {{ array | where: key,value }}
    eleventyConfig.addFilter('where', function (array, key, value) {
        return array.filter(item => {
            const keys = key.split('.');
            const reducedKey = keys.reduce((object, key) => {
            return object[key];
            }, item);

            return (reducedKey === value ? item : false);
        });
    });

    eleventyConfig.addCollection("post", collection => {
        return collection.getFilteredByGlob("_posts/*.md").sort((a, b) => b.data.date - a.data.date);
    });

    eleventyConfig.addCollection("nav", collection => {
        return collection.getFilteredByTag("page").sort((item1, item2) => item1.data.nav_order - item2.data.nav_order);
    });

    // Copy the asset directories to the compiled site folder
    eleventyConfig.addPassthroughCopy('files');
    eleventyConfig.addPassthroughCopy('scripts');
    eleventyConfig.addPassthroughCopy('styles');

    return {
        dir: {
            input: "./",
            output: "./_site",
            layouts: '_layouts'
        }
    };
};

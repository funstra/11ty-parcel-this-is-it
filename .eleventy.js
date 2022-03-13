const { resolve } = require("path");
/** @param {import('@11ty/eleventy/src/UserConfig')}  config */
module.exports = config => {
  return {
    dir: {
      input: "src",
      output: "_documents",
    },
  };
};

const { existsSync } = require("fs");
const { resolve } = require("path");
module.exports = () => {
  return {
    permalink: "{{page.filePathStem | replace('/pages/','/')}}/",
    eleventyComputed: {
      bla: data => "abc",
      script: data => {
        const s = data.page.filePathStem;
        const p = resolve(__dirname, s.replace("/pages/", "") + ".js");
        if (existsSync(p)) {
          return "/src" + s + ".js";
        } else {
          return ""
        }
      },
    },
  };
};

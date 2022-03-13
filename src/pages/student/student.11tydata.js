module.exports = {
  eleventyComputed: {
    title: data => {
      return data.student.name;
    },
  },
};

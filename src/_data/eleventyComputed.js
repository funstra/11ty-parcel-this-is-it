module.exports = () => {
  return {
    preloads: data => {
      return data.styles;
    },
  };
};

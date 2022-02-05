module.exports = (config) => {
  const imageAssets = {
    test: /\.png$/,
    type: 'asset/inline',
  };
  return {
    ...config,
    module: {
      ...config.module,
      rules: [...config.module.rules, imageAssets],
    },
  };
};

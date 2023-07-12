const { inspect } = require('util');

module.exports = (config) => {
  // console.log(inspect(config.module.rules, false, 6));

  return {
    ...config,
    module: {
      ...config.module,
      // rules: [...withUpdatedNxStyleRule(config.module.rules)],
    },
  };
};

function withUpdatedNxStyleRule(rules) {
  return rules.map(updateNxStyleRule);
}

function updateNxStyleRule(rule) {
  if (rule.test.test('something.scss')) {
    return {
      test: /\.(scss|css)$/i,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    };
  } else {
    return rule;
  }
}

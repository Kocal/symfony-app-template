const { generateConfig } = require('@kocal/eslint-config-generator');

const config = generateConfig({
  vue: true,
  typescript: true,
});

config.parserOptions.project = [`${__dirname}/tsconfig.json`, `${__dirname}/tests/cypress/tsconfig.json`];
config.overrides.push({
  files: ['webpack.config.js'],
  rules: {
    'no-param-reassign': 'off',
  },
});

module.exports = config;

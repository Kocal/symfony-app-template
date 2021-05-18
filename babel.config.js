module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/typescript',
    '@vue/babel-preset-jsx',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
    ['@babel/proposal-class-properties'],
  ],
  assumptions: {
    setPublicClassFields: true,
  },
  env: {
    test: {
      presets: [
        [
          '@babel/env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    },
  },
};

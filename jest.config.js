module.exports = {
  bail: true,
  verbose: !process.env.CI,
  moduleFileExtensions: require('./.eslintrc').settings['import/extensions'].map((e) => e.replace('.', '')), // eslint-disable-line global-require
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/assets/app/$1',
  },
  testMatch: ['<rootDir>/tests/jest/**/*.test.(js|jsx|ts|tsx)'],
  snapshotSerializers: ['jest-serializer-vue'],
  watchPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/vendor/'],
};

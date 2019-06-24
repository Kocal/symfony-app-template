module.exports = {
  bail: true,
  verbose: !process.env.CI,
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/assets/app/$1',
  },
  testMatch: ['<rootDir>/tests/jest/**/*.test.(js|jsx|ts|tsx)'],
  snapshotSerializers: ["jest-serializer-vue"]
};

// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
const {defaults: tsjPreset} = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,

  preset: 'react-native',
  transform: {
    ...tsjPreset.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  cacheDirectory: '.jest/cache',
  // // The directory where Jest should store its cached dependency information// cacheDirectory: "/private/var/folders/zn/55gj63yj7_l0zbk2vhx4y9800000gp/T/jest_dy",
  // cacheDirectory: '.jest/cache',

  // // Automatically clear mock calls and instances between every test
  // clearMocks: true,

  // // The directory where Jest should output its coverage files
  // coverageDirectory: 'coverage',

  // // A set of global variables that need to be available in all test environments
  // // globals: {},

  // // An array of file extensions your modules use
  // moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],

  // // A preset that is used as a base for Jest's configuration
  // preset: 'react-native',

  // // The test environment that will be used for testing
  // testEnvironment: 'node',

  // // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  // testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],

  // // The regexp pattern or array of patterns that Jest uses to detect test files
  // testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',

  // // A map from regular expressions to paths to transformers
  // transform: {
  //   '^.+\\.(js)$': '<rootDir>/node_modules/babel-jest',
  //   '\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  // },

  // // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  // transformIgnorePatterns: [
  //   '/node_modules/',
  //   '\\.snap$',
  //   '<rootDir>/node_modules/',
  // ],
};

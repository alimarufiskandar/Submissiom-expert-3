/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
 
/** @type {import('jest').Config} */
const config = {
  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/tests/**/*.test.[jt]s"
  ],
  // eslint-disable-next-line max-len
  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: ['fake-indexeddb/auto'],
  // The test environment that will be used for testing
  testEnvironment: 'jest-environment-jsdom',
 
  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(js|ts)$': 'babel-jest',
  },
};
 
module.exports = config;
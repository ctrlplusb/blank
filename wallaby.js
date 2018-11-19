const babelConfig = require('./babel.config');

process.env.NODE_ENV = 'test';

module.exports = wallaby => ({
  files: ['src/**/*.js', { pattern: 'src/**/*.test.js', ignore: true }],
  tests: ['src/**/*.test.js'],
  testFramework: 'jest',
  env: {
    type: 'node',
    runner: 'node',
  },
  compilers: {
    'src/**/*.js': wallaby.compilers.babel(babelConfig),
  },
});

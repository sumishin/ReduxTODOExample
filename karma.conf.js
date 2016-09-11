// Karma configuration
// Generated on Sun Sep 11 2016 00:28:09 GMT+0900 (JST)

var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'sinon'],
    files: [
      'spec/**/*.spec.ts'
    ],
    exclude: [
    ],
    plugins: [
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-sinon',
      'karma-mocha-reporter',
      'karma-coverage',
      'karma-sourcemap-loader',
      'karma-webpack'
    ],
    preprocessors: {
      'spec/*.ts': ['webpack', 'sourcemap'],
      'spec/*.tsx': ['webpack', 'sourcemap']
    },
    webpack: {
      devtool: 'inline-source-map',
      resolve: webpackConfig.resolve,
      module: webpackConfig.module
    },
    reporters: ['mocha', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html' },
        { type: 'text' }
      ]
    }
  })
}

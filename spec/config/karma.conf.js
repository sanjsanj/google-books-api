module.exports = function(config) {
  config.set({
    basePath: '.',
    frameworks: ['jasmine'],
    files: [
      { pattern: 'test-context.js', watched: false },
    ],
    preprocessors: {
      'test-context.js': ['webpack'],
    },
    webpack: {
      module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015' },
        ],
      },
      watch: true,
    },
    webpackServer: {
      noInfo: true,
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
  })
};

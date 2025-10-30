module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'spec/support/**/*.spec.js'
    ],
    preprocessors: {
      'spec/support/**/*.spec.js': ['webpack']
    },
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          }
        ]
      }
    },
    browsers: ['ChromeHeadless'],
    singleRun: false
  });
};
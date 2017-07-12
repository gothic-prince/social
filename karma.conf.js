// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    files : [
      {pattern: '/home/pavel/Sites/social/src/models/User/Mock/json/**/*.json', watched: false, included: false, served: true},
      {pattern: '/home/pavel/Sites/social/src/models/Post/Mock/json/**/*.json', watched: false, included: false, served: true},
      {pattern: '/home/pavel/Sites/social/src/models/Info/Mock/json/**/*.json', watched: false, included: false, served: true},
      {pattern: '/home/pavel/Sites/social/src/models/File/Mock/json/**/*.json', watched: false, included: false, served: true},
    ],
    proxies: {
      '/users/': '/home/pavel/Sites/social/src/models/User/Mock/json',
      '/posts/': '/home/pavel/Sites/social/src/models/Post/Mock/json',
      '/info/': '/home/pavel/Sites/social/src/models/Info/Mock/json',
      '/files/': '/home/pavel/Sites/social/src/models/File/Mock/json',
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};

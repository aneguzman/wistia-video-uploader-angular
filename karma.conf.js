// Karma configuration
// Generated on Thu Jul 07 2016 23:06:13 GMT-0400 (SA Western Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'public/scripts/vendor/jquery/jquery-1.11.3.min.js',
        'public/scripts/vendor/blueimp/jquery.ui.widget.js',
        'public/scripts/vendor/blueimp/jquery.fileupload.js',
        'public/scripts/vendor/angular/angular.js',
        'public/Scripts/vendor/angular/angular-mocks.js',
        'public/modules/main.js',
        'public/globals/globals.js',
        'public/directives/fileUploader.js',
        'public/directives/spec.js',
        '**/*.html'
    ],


    // list of files to exclude
    exclude: [
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    preprocessors: {
        '**/*.html': ['ng-html2js']
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,

    plugins: [
        'karma-jasmine',
        'karma-chrome-launcher',
        'karma-ng-html2js-preprocessor' //added this
    ],

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

  })
}

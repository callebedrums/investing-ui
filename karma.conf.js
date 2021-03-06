// Karma configuration
// Generated on Tue Jan 31 2017 09:45:12 GMT-0200 (E. South America Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon'],


    // list of files / patterns to load in the browser
    files: [
        { pattern: 'node_modules/core-js/client/shim.min.js', included: true, watched: false },
        { pattern: 'node_modules/zone.js/dist/zone.js', included: true, watched: false },
        { pattern: 'node_modules/reflect-metadata/Reflect.js', included: true, watched: false },
        { pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: false },
        {
            pattern: 'node_modules/**/*.js',
            watched: false,
            included: false
        }, {
            pattern: 'src/**/*.js',
            included: false
        }, {
            pattern: 'test/**/*.js',
            included: false
        },
        { pattern: 'karma-systemjs.config.js', include: true, watched: true }
    ],

    proxies: {
        '/': '/base/'
    },


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'karma-systemjs.config.js': ['babel'],
        'test/**/*.js': ['babel'],
        'src/**/*.js': ['babel', 'coverage']
    },

    babelPreprocessor: {
        options: {
            stage: 1,
            sourceMap: 'inline'
        }
    },

    babelPreprocessor: {
        options: {
            presets: ['es2015'],
            sourceMap: 'inline'   
        }
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['coverage', 'progress'],

    coverageReporter: {
        instrumenters: { isparta: require('isparta') },
        instrumenter: {
            'src/**/*.js': 'isparta'
        },
        reporters: [{
            type: 'text-summary'
        },{
            type: 'html',
            dir: 'report/coverage/'
        }]
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}

'use strict';
module.exports = function (config) {

    config.set({
        basePath: './',

        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-route/angular-route.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'app/components/**/*.js',
            'app/module*/**/*.js',
            'test/unit/**/*.spec.js'
        ],

        preprocessors: {
            'app/components/**/*.js': ['coverage']
        },

        autoWatch: true,

        frameworks: ['jasmine'],

        borwsers: ['chrome'],

        reporters: ['junit', 'progress', 'coverage'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },

        coverageReporter: {
            type: 'html',
            dir: 'coverage/',
            file: 'coverage.html'
        }
    });
};

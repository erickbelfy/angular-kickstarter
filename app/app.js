(function () {
    'use strict';

    angular.module('kickstarter', [
        'ngRoute',
        'kickstarter.constants',
        'kickstarter.services',
        'kickstarter.directives',
        'module1'
    ]).config(['$routeProvider'], function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
    });
})();

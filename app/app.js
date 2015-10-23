'use strict';

angular.module('kickstarter', [
    'ngRoute',
    'kickstarter.services',
    'kickstarter.directives'
]).config(['$routeProvider'], function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/module1'});
});

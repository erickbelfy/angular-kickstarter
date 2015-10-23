'use strict';

angular.module('kickstarter', [
    'ngRoute',
    'kickstarter.autocomplete'
]).config(['$routeProvider'], function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/module1'});
});

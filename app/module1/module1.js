(function() {
    'use strict';
    angular.module('module1', [
        'ngRoute'
    ])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: 'app/module1/module1.html'
      });
    }])
}) ();

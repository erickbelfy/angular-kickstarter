(function() {
    'use strict';
    angular.module('supernova.login', [
        'ngRoute'
    ])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/login', {
        templateUrl: 'app/module1/module1.html'
      });
    }])
}) ();

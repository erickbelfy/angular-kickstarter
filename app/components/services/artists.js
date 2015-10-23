(function () {
    'use strict';

    angular.module('kickstarter.services.artists', [])
    .factory('Artists', Artists);

    Artists.$inject = ['API', '$http'];

    function Artists(API, $http) {}
})();

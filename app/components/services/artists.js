(function () {
    'use strict';

    angular.module('kickstarter.services.albums', [])
    .factory('Albums', Albums);

    Albums.$inject = ['API', '$http'];

    function Albums(API, $http) {}
})();

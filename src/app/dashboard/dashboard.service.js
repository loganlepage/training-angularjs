(function () {
    'use strict';

    angular.module('app.dashboard.service', [])
        .factory('computerService', computerService);

    function computerService($http) {
        return {
            list: $http.get(env.api.URL + '/computers')
        }
    }
})();

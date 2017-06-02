(function () {
    'use strict';

    angular.module('app.dashboard.service', [])
        .factory('computerService', computerService)
        .factory('companyService', companyService);

    function urlBuilder(params = {}) {
        let str = "";
        for (const key in params) {
            str += `${str}&${key}=${params[key]}`;
        }
        return str;
    }

    function computerService($http) {
        return {
            list: (params) => $http.get(`${env.api.URL}/computers?${urlBuilder(params)}`),
            get: (id) => $http.get(`${env.api.URL}/computers/${id}`),
            edit: (vm) => $http.put(`${env.api.URL}/computers`, {
                'id': vm.id,
                'name': vm.name
            })
        }
    }

    function companyService($http) {
        return {
            list: $http.get(`${env.api.URL}/companies`),
        }
    }
})();

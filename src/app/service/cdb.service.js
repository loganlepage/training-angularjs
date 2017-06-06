(function () {
    'use strict';

    angular.module('app.service', ['app.model'])
        .factory('computerService', computerService)
        .factory('companyService', companyService);

    function urlBuilder(params = {}) {
        let str = "";
        for (const key in params) {
            str += `${str}&${key}=${params[key]}`;
        }
        return str;
    }

    function computerService($http, Computer) {
        function pageMapper(res) {
           // console.log(res);
            let list = [];
            for (let i = 0; i < res.data.list.length; i++) {
                list.push(Computer.mapper(res.data.list[i]));
            }
            res.data.list = list;
            return res;
        }

        return {
            list: (params) => $http.get(`${env.api.URL}/computers?${urlBuilder(params)}`).then(pageMapper),
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
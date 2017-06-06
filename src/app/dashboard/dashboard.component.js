(function () {
    'use strict';

    angular.module('app.dashboard')
        .component('dashboard', {
            templateUrl: 'src/app/dashboard/dashboard.html',
            controller: DashboardController
        });

    /* @ngInject */
    function DashboardController($location, computerService, $log) {
        // jshint validthis: true
        const vm = this;
        vm.page = vm.events = {};
        vm.state = {
            loaded: false
        };
        vm.$onInit = getList;
        vm.doSearch = doSearch;
        let urlParams = {};

        function getList() {
            computerService.list(urlParams).then((response) => {
                vm.page = response.data;
                vm.events = {
                    onIndexChange: onIndexChange,
                    onLimitChange: onLimitChange
                };
                vm.state.loaded = true;
            });
        }

        function doSearch(data) {
            console.log(data);
        }

        function onIndexChange(newIndex) {
            urlParams.index = newIndex;
            getList();
        }

        function onLimitChange(newLimit) {
            urlParams.index = 1;
            urlParams.limit = newLimit;
            getList();
        }
    }
})();

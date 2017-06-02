(function () {
    'use strict';

    angular.module('app.dashboard')
        .component('dashboard', {
            templateUrl: 'src/app/dashboard/dashboard.html',
            controller: DashboardController
        })
        .component('addComputer', {
            templateUrl: 'src/app/dashboard/addComputer.html',
            controller: AddComputerController
        })
        .component('editComputer', {
            templateUrl: 'src/app/dashboard/editComputer.html',
            controller: EditComputerController
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

    /* @ngInject */
    function AddComputerController() {}

    /* @ngInject */
    function EditComputerController(computerService, companyService, $stateParams) {
        // jshint validthis: true
        const vm = this;
        vm.$onInit = $onInit;
        vm.submit = submit;

        function $onInit() {
            computerService.get($stateParams.id).then((response) => {
                vm.computer = response.data;
            });
            companyService.list.then((response) => {
                vm.companies = response.data;
            });
        }

        function submit() {
            computerService.edit(vm).then((response) => {
                vm.computer = response.data;
            });
        }
    }

})();

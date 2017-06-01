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

    function DashboardController(computerService) {
        // jshint validthis: true
        const vm = this;
        vm.page = {};
        vm.$onInit = $onInit;

        ////////////

        function $onInit() {
            vm.page = computerService.list.then((response) => {
                vm.page = response.data;
            });
        }
    }
    function AddComputerController() {}
    function EditComputerController() {}

})();

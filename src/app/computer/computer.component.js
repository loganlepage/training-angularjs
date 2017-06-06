(function () {
    'use strict';

    angular.module('app.computer')
        .component('addComputer', {
            templateUrl: 'src/app/computer/addComputer.html',
            controller: AddComputerController
        })
        .component('editComputer', {
            templateUrl: 'src/app/computer/editComputer.html',
            controller: EditComputerController
        });

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

(function () {
    'use strict';

    angular.module('app.pagination')
        .component('pagination', {
            templateUrl: 'src/app/pagination/pagination.html',
            controller: PaginationController,
            bindings: {
                page: '<',
                events: '<',
                maxLinks: '<'
            }
        });

    /* @ngInject */
    function PaginationController($location, $log) {
        // jshint validthis: true
        const vm = this;
        vm.renderable = false;
        vm.$onInit = vm.$onChanges = calcValues;
        vm.getRange = getRange;
        vm.onIndexChange = onIndexChange;
        vm.onLimitChange = onLimitChange;

        function calcValues() {
            vm.maxLinks = vm.maxLinks || 10;
            vm.lastPage = vm.page.index == vm.page.maxPage;
            vm.pgStart = (vm.page.index - vm.maxLinks / 2) > 1 ? vm.page.index - vm.maxLinks / 2 : 1;
            vm.pgEnd = vm.pgStart + vm.maxLinks;
            $log.debug(vm.page.index);
            if(vm.pgEnd > vm.page.maxPage + 1) {
                vm.diff = vm.pgEnd - vm.page.maxPage;
                vm.pgStart = vm.pgStart - vm.diff - 1;
                if(vm.pgStart < 1) {
                    vm.pgStart = 1;
                }
                vm.pgEnd = vm.page.maxPage + 1;
            }
        }

        function getRange() {
            let input = [];
            for (let i = vm.pgStart; i <= vm.pgEnd - 1; i++) {
                input.push(i);
            }
            return input;
        }

        function onIndexChange(newIndex) {
            if(vm.events.onIndexChange) {
                vm.events.onIndexChange(newIndex);
            }
        }

        function onLimitChange(newLimit) {
            if(vm.events.onLimitChange) {
                vm.events.onLimitChange(newLimit);
            }
        }
    }

})();

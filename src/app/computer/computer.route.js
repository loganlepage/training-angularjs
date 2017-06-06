(function() {
    'use strict';
    angular
        .module('app.computer')
        .config(routesConfig);

    function routesConfig($stateProvider) {
        $stateProvider
            .state('addComputer', {
                url: '/computer/add',
                component: 'addComputer'
            })
            .state('editComputer', {
                url: '/computer/edit/:id',
                component: 'editComputer'
            });
    }
})();

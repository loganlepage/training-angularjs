(function() {
    'use strict';
    angular
        .module('app.dashboard')
        .config(routesConfig);

    function routesConfig($stateProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                component: 'dashboard'
            })
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

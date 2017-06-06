(function() {
    'use strict';
    angular
        .module('app.dashboard')
        .config(routesConfig);

    function routesConfig($stateProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                component: 'dashboard',
            });
    }
})();

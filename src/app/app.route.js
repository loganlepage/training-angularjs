(function() {
    'use strict';
    angular
        .module('app')
        .config(routesConfig);

    function routesConfig($stateProvider) {
        $stateProvider
            .state('404', {
                url: '/404',
                templateUrl: 'src/app/404.html'
            });
    }
})();

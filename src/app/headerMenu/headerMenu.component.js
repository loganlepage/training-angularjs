(function () {
    'use strict';

    angular.module('app.headerMenu')
        .component('headerMenu', {
            templateUrl: 'src/app/headerMenu/headerMenu.html',
            controller: HeaderMenuController,
        });

    function HeaderMenuController() {}
})();

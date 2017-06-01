/* eslint strict: [2, "global"] */
'use strict';

describe('dashboard component', () => {

    beforeEach(module('app.dashboard', $provide => {
        $provide.factory('dashboard', () => {
            return {
                templateUrl: 'app/dashboard/dashboard.html'
            };
        });
    }));

    it('should render hello world', angular.mock.inject(($rootScope, $compile) => {
        const element = $compile('<hello>Loading...</hello>')($rootScope);
        $rootScope.$digest();
        const h1 = element.find('h1');
        expect(h1.html()).to.be.equals('Hello World!');
    }));
});

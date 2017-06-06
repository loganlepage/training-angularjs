(function () {
    'use strict';

    angular.module('app.model', [])
        .factory('Company', Company)
        .factory('Computer', Computer);

    //Company is injected at bottom
    function Computer(Company) {

        function Computer(id, name, introduced, discontinued, company) {
            this.id = id;
            this.name = name;
            this.introduced = introduced;
            this.discontinued = discontinued;
            this.company = company;
        }

        //Static methods
        Computer.build = function (data) {
            return new Computer(
                data.id,
                data.name,
                data.introduced == null ? null : new Date(
                        data.introduced.year, data.introduced.monthValue - 1, data.introduced.dayOfMonth
                    ),
                data.discontinued == null ? null : new Date(
                        data.introduced.year, data.introduced.monthValue - 1, data.introduced.dayOfMonth
                    ),
                data.company === null ? null : Company.build(data.company)
            );
        };
        Computer.mapper = function (responseData) {
            return Computer.build(responseData);
        };

        //Return the constructor
        return Computer;
    }

    Computer.$inject = ['Company'];

    function Company() {

        function Company(id, name) {
            this.id = id;
            this.name = name;
        }

        //Static method
        Company.build = function (data) {
            return data ? new Company(data.id, data.name) : null;
        };

        //Return the constructor
        return Company;
    }
})();
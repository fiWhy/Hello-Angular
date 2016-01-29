(function(){
    'use strict';

    angular.module('app.core.services')
        .service('AlertService', AlertService);

    function AlertService() {
        return {
            success: success,
            error: error
        };

        function success(head, body) {

        }

        function error(head, body) {

        }
    }

})();
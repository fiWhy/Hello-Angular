(function(){
    'use strict';

    angular.module('app.core.services')
        .service('AlertService', AlertService);

    AlertService.$inject = ['$rootScope', '$compile'];
    function AlertService($rootScope, $compile) {
        var alertListeners = [];
        
        return {
            success: success,
            error: error,
            info: info,
            registerAlertObserver: registerAlertObserver
        };
        
        function registerAlertObserver(listener) {
            alertListeners.push(listener);
        }
        
        function success(head, body) {
            throwMessage('success', head, body);
        }
        
        function info(head, body) {
            throwMessage('info', head, body)
        }
        

        function error(head, body) {
            throwMessage('error', head, body);
        }
            
        function throwMessage(type, head, body) {
            alertListeners.forEach(function(callback){
                callback({
                    type: type,
                    head: head,
                    body: body
                });
            })
        }
    }

})();
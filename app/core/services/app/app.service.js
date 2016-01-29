(function(){
    'use strict';
    
    angular.module('app.core')
            .service('AppService', AppService);
    
    function AppService() {
        return {
            isLoggedIn: isLoggedIn
        }
        
            function isLoggedIn() {
                return true;
            }
    }
})()
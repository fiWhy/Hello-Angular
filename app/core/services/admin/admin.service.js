(function(){
    'use strict';
    
    angular.module('admin.core')
            .service('AdminService', AdminService);
    
    function AdminService() {
        return {
            isLoggedIn: isLoggedIn
        }
        
            function isLoggedIn() {
                return true;
            }
    }
})()
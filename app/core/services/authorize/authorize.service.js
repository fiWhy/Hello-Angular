(function(){
    'use strict';

    angular.module('admin.core')
        .service('AuthorizeService', AuthorizeService);

    AuthorizeService.$inject = ['AuthorizeResource'];
    function AuthorizeService(AuthorizeResource) {
        return {
            isLoggedIn: isLoggedIn
        }

        function isLoggedIn(){
            return true;
            //return AuthorizeResource.isLoggedIn();
        }
    }
})()
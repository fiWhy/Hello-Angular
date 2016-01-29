(function(){
    'use strict';

    angular.module('app.core.services')
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
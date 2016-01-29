(function(){
    'use strict';

    angular.module('app.core.services')
        .service('AuthorizeService', AuthorizeService);

    AuthorizeService.$inject = ['AuthorizeResource'];
    function AuthorizeService(AuthorizeResource) {
        return {
            isLoggedIn: isLoggedIn,
            login: login
        }

        function isLoggedIn() {
            return true;
            //return AuthorizeResource.isLoggedIn();
        }

        function login(data) {
            console.log(data);
            return true;
            //return AuthorizeResource.login();
        }
    }
})()
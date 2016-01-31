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

        function isLoggedIn(successCallback, errorCallback) {
            return true;
            //return AuthorizeResource.isLoggedIn();
        }

        function login(data, successCallback, errorCallback) {
            successCallback(true);
//            return AuthorizeResource.login()
//                    .then(successCallback, errorCallback);
        }
    }
})()
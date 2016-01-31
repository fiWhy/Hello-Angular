(function(){
    'use strict';

    angular.module('app.core.services')
        .service('AuthorizeService', AuthorizeService);

    AuthorizeService.$inject = ['AuthorizeResource'];
    function AuthorizeService(AuthorizeResource) {
        var authListeners = [];
        
        return {
            registerAuthObserver: registerAuthObserver,
            isLoggedIn: isLoggedIn,
            login: login
        }

        function registerAuthObserver(listener) {
            authListeners.push(listener);
        }
        
        function isLoggedIn(successCallback, errorCallback) {
            return true;
            //return AuthorizeResource.isLoggedIn();
        }
        
        function logout(successCallback, errorCallback) {
            callListeners('logout');
            successCallback(true);
//            return AuthorizeResource.logout()
//                    .then(function(response){
//                            callListeners(reponse);
//                            successCallback(reponse);
//                        }), function(response){
//                            callListeners(reponse);
//                            errorCallback(reponse);
//                        });
        }

        function login(data, successCallback, errorCallback) {
            callListeners('login');
            successCallback(true);
//            return AuthorizeResource.login()
//                    .then(function(response){
//                            callListeners(reponse);
//                            successCallback(reponse);
//                        }), function(response){
//                            callListeners(reponse);
//                            errorCallback(reponse);
//                        });
            
        }
        
        function callListeners(response) {
            authListeners.forEach(function(value){
                value(response);
            })
        }
    }
})()
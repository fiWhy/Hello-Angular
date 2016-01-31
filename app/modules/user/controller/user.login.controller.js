(function(){
    'use strict';
    
    angular.module('app.modules.user')
        .controller('UserLoginController', UserLoginController);
    
    UserLoginController.$inject = ['config', 'AuthorizeService', '$translate', 'AlertService'];
    function UserLoginController() {
        var vm = this;

        vm.login = login;
        vm.logout = logout;

        activate();

        function activate() {
        }
        

        function login(){
            AuthorizeService.login(vm.loginData, function(response){
                $translate(['SUCCESS_AUTHORIZE_HEAD', 'SUCCESS_AUTHORIZE_BODY'])
                        .then(function(translations){
                                AlertService.success(translations.SUCCESS_AUTHORIZE_HEAD, translations.SUCCESS_AUTHORIZE_BODY);
                        });
            }, function(error){
                $translate(['ERROR_AUTHORIZE_HEAD', 'ERROR_AUTHORIZE_BODY'])
                        .then(function(translations){
                                AlertService.error(translations.ERROR_AUTHORIZE_HEAD, translations.ERROR_AUTHORIZE_BODY);
                        });
            });
        }
        
        function logout() {
            AuthorizeService.logout();
        }
        
        console.log('Login page');
    }
})();
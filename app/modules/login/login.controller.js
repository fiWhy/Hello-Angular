(function(){
    'use strict';
    
    angular.module('app.modules.login')
            .controller('LoginController', LoginController);


    LoginController.$inject = ['config', 'AuthorizeService', '$translate', 'AlertService'];
    function LoginController(config, AuthorizeService, $translate, AlertService) {
        var vm = this;

        vm.login = login;

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
        
        console.log('Login page');
    }
})();
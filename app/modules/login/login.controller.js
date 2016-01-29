(function(){
    'use strict';
    
    angular.module('app.modules.login')
            .controller('LoginController', LoginController);

    LoginController.$inject = ['config', 'AuthorizeService'];
    function LoginController(config, AuthorizeService) {
        var vm = this;

        vm.login = login;

        function login(){
            AuthorizeService.login(vm.loginData);
        }
        
        console.log('Login page');
    }
})()
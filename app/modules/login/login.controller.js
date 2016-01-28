(function(){
    'use strict';
    
    angular.module('admin.modules.login')
            .controller('LoginController', LoginController);
    
    function LoginController() {
        var vm = this;
        
        console.log('Login page');
    }
})()
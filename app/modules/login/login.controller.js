(function(){
    'use strict';
    
    angular.module('app.modules.login')
            .controller('LoginController', LoginController);
    
    function LoginController() {
        var vm = this;
        
        console.log('Login page');
    }
})()
(function(){
    'use strict';
    
    angular.module('app.modules')
            .controller('UserController', UserController);


    UserController.$inject = ['config', 'AuthorizeService', '$translate', 'AlertService'];
    function UserController(config, AuthorizeService, $translate, AlertService) {
        var vm = this;

        activate();

        function activate() {
        }
        
        
        console.log('User page');
    }
})();
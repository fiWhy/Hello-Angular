(function(){
    'use strict';
    angular.module('app')
            .controller('AppController', AppController);

    AppController.$inject = ['$state', 'AppService', 'AuthorizeService', 'MenuService', '$translate', 'config'];
    function AppController($state, AppService, AuthorizeService, MenuService, $translate, config) {
        var vm = this;
        vm.isLoggedIn = false;
        
        activate();
        
        function activate(){
            console.log('app');
            AppService.initLanguage(config.language);
            vm.isLoggedIn = isLoggedIn();

            if(vm.isLoggedIn){
                vm.menu = MenuService.getMainMenu();
            }else{
                $state.go('admin.login');
            }
        }
        
        function isLoggedIn() {
            return AuthorizeService.isLoggedIn();
        }
    }
})()
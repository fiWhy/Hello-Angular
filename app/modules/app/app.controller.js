(function(){
    'use strict';
    angular.module('app')
            .controller('AppController', AppController);

    AppController.$inject = ['$state', 'AuthorizeService', 'MenuService'];
    function AppController($state, AuthorizeService, MenuService) {
        var vm = this;
        vm.isLoggedIn = false;
        
        activate();
        
        function activate(){
            console.log('app');
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
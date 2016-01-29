(function(){
    'use strict';
    angular.module('admin')
            .controller('AdminController', AdminController);
    
    AdminController.$inject = ['$state', 'AuthorizeService', 'MenuService'];
    function AdminController($state, AuthorizeService, MenuService) {
        var vm = this;
        vm.isLoggedIn = false;
        
        activate();
        
        function activate(){
            console.log('admin');
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
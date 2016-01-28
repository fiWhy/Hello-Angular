(function(){
    'use strict';
    angular.module('admin')
            .controller('AdminController', AdminController);
    
    AdminController.$injector = ['$state', 'AdminService', 'MenuService'];
    function AdminController($state, AdminService, MenuService) {
        var vm = this;
        vm.isLoggedIn = false;
        
        activate();
        
        function activate(){
            console.log('admin');
            vm.isLoggedIn = isLoggedIn();

            if(vm.isLoggedIn){
                vm.menu = MenuService.getMenu();
            }else{
                $state.go('admin.login');
            }
        }
        
        function isLoggedIn() {
            return AdminService.isLoggedIn();
        }
    }
})()
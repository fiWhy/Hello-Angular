(function(){
    'use strict';
    angular.module('admin')
            .controller('AdminController', AdminController);
    
    AdminController.$inject = ['$state', 'AdminService', 'MenuService'];
    function AdminController($state, AdminService, MenuService) {
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
            return AdminService.isLoggedIn();
        }
    }
})()
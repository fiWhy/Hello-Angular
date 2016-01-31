(function(){
    'use strict';
    angular.module('app')
            .controller('AppController', AppController);

    AppController.$inject = ['$scope', '$state', 'AppService', 'AuthorizeService', 'MenuService', '$translate', 'config', 'AlertService', '$timeout'];
    function AppController($scope, $state, AppService, AuthorizeService, MenuService, $translate, config, AlertService, $timeout) {
        var vm = this;
        vm.isLoggedIn = false;
        vm.alerts = [];
        
        activate();
        
        function activate(){
            vm.isLoggedIn = isLoggedIn();
               registerAlerts(vm.alerts);
            if(vm.isLoggedIn){
                vm.menu = MenuService.getMainMenu();
            }else{
                $state.go('admin.login');
            }
        }
        
        
        function isLoggedIn() {
            return AuthorizeService.isLoggedIn();
        }
        
        
        /* Alert handler */
        function registerAlerts(listener) {
            AlertService.registerErrorListener(alertDeeds);
        }
        
        function alertDeeds(alert){
                vm.alerts.push(alert);
                var l = vm.alerts.length - 1;
            
            $timeout(function(){
               vm.alerts.forEach(function(key, value){
                   vm.alerts.splice(l, 1);
               })
            }, 2000); 
        }
        /* Alert Handler */
        
    }
})();
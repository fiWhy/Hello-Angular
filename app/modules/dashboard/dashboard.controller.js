(function(){
    'use strict';
    
    angular.module('admin.modules.dashboard')
            .controller('DashboardController', DashboardController);
    
    function DashboardController() {
        var vm = this;
        
        console.log('Dashboard');
    }
})()
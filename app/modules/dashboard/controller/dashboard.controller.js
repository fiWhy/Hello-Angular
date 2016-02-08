(function(){
    'use strict';
    
    angular.module('app.modules')
            .controller('DashboardController', DashboardController);
    
    function DashboardController() {
        var vm = this;
        
        console.log('Dashboard');
    }
})()
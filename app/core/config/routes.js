(function(){
    'use strict';
    angular.module('admin.core')
        .config(router);

    function loadModules(modules) {
        return {
            loadModules: ['$ocLazyLoad', function($ocLazyLoad){
                return $ocLazyLoad.load(modules);
            }]
        }
    }
    
    function router($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/dashboard');
        $stateProvider
            .state('admin', {
                url: "/",
                controller: 'AdminController as vm',
                templateUrl: 'app/view/layout/index.html',
                resolve: loadModules('Admin')
            })
        
            .state('admin.dashboard', {
                url: "dashboard",
                views: {
                   content: {
                       controller: 'DashboardController as vm',
                       templateUrl:'app/modules/dashboard/view/dashboard.template.html',
                   } 
                },
                resolve: loadModules('Dashboard')
            })
        
            .state('admin.login', {
                url: "login",
                controller: 'LoginController as vm',
                views: {
                   content: {
                       controller: 'LoginController as vm',
                       templateUrl:'app/modules/login/view/login.template.html',
                   } 
                },
                resolve: loadModules('Login')
            })
    }
    
})()
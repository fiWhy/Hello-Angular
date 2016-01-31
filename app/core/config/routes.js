(function(){
    'use strict';
    angular.module('app.core')
        .config(router);

    router.$inject = ['$stateProvider', '$urlRouterProvider', 'config']
    function router($stateProvider, $urlRouterProvider, config) {
        $urlRouterProvider.otherwise('/dashboard');
        $stateProvider
            .state('app', {
                url: "/",
                controller: 'AppController as vm',
                templateUrl: config.documentRoot + '/view/layout/index.html',
                resolve: {
                        loadModules: ['$ocLazyLoad', '$timeout', function($ocLazyLoad, $timeout){
                        return $ocLazyLoad.load('App');
                    }]
                }
            })
        
            .state('app.dashboard', {
                url: "dashboard",
                views: {
                   content: {
                       controller: 'DashboardController as vm',
                       templateUrl: config.documentRoot + '/modules/dashboard/view/dashboard.template.html',
                   } 
                },
                resolve: {
                        loadModules: ['$ocLazyLoad', '$timeout', function($ocLazyLoad, $timeout){
                        return $ocLazyLoad.load('Dashboard');
                    }]
                }
            })
            .state('app.user', {
                url: "user/:controller",
                views: {
                   content: {
                        controllerProvider: function($stateParams) {
                            console.log($stateParams);
                            var ctrlName = 'User' + ($stateParams.controller|| '') + "Controller";
                            console.log(ctrlName);
                            return ctrlName;
                        },
                       templateUrl: config.documentRoot + '/modules/user/view/user.template.html',
                   } 
                },
                resolve: {
                        loadModules: ['$ocLazyLoad', '$timeout', function($ocLazyLoad, $timeout){
                        return $ocLazyLoad.load('User');
                    }]
                }
            })
    }
    
})()
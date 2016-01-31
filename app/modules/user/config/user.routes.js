(function(){
    'use strict';
    
    angular.module('app.modules.user')
            .config(router);
    
    router.$inject = ['$stateProvider', 'config'];
    function router($stateProvider, config) {
        $stateProvider
            .state('app.user.login', {
                url: "/user/login",
                views: {
                   content: {
                       controller: 'UserLoginController as vm',
                       templateUrl: config.documentRoot + '/modules/user/view/user.login.template.html',
                   } 
                },
                resolve: {
                        loadModules: ['$ocLazyLoad', '$timeout', function($ocLazyLoad, $timeout){
                        return $ocLazyLoad.load('User');
                    }]
                }
            })
            .state('app.user.logout', {
                url: "/user/logout",
                views: {
                   content: {
                       controller: 'UserLoginController as vm',
                       templateUrl: config.documentRoot + '/modules/user/view/user.login.template.html',
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
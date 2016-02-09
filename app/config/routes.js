(function(){
    'use strict';
    angular.module('app.config')
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
            });
    }

})()

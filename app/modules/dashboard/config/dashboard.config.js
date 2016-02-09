(function(){
    'use strict';

    angular.module('app.modules')
        .config(files)
        .config(config);

    files.$inject = ['$ocLazyLoadProvider', 'config'];
    function files($ocLazyLoadProvider, config) {
         $ocLazyLoadProvider.config({
            modules : [
          /* Dashboard */
                {
                    name: 'Dashboard',
                    files: [
                        config.documentRoot + '/modules/dashboard/controller/dashboard.controller.js',
                        config.documentRoot + '/modules/dashboard/service/dashboard.service.js',
                    ]
                },
                ]
         })
    }

    config.$inject = ['$translateProvider', 'config', '$stateProvider'];
    function config($translateProvider, config, $stateProvider) {
        console.log('Init Dashboard Config');
        $translateProvider.useStaticFilesLoader({
            prefix: config.documentRoot + '/modules/dashboard/languages/',
            suffix: '.json'
        });


        $stateProvider.state('app.dashboard', {
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
    };

})();

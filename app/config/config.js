(function(){
    'use strict';
    angular.module('app.config', [])
            .constant('config', ConfigConstant())
            .config(config)
            .run(bootstrap);

    config.$inject = ['$locationProvider', '$translateProvider'];
    function config($locationProvider, $translateProvider) {
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });

        $translateProvider
            .useSanitizeValueStrategy(null)
            .forceAsyncReload(true);

    }

    function ConfigConstant(){
        var apiUrl = '/api';
        return  {
            apiUrl: apiUrl,
            documentRoot: 'app',
            modulesRoot: 'app/modules',
            mainPaths: {
                menu: apiUrl + 'menu',
                authorize: apiUrl + 'authorize/:action'
            },
            language: 'en',
        }
    }

    bootstrap.$inject = ['$ocLazyLoad', '$rootScope', '$translate', 'config'];
    function bootstrap($ocLazyLoad, $rootScope, $translate, config) {
        console.log('Application bootstrap');
        return $ocLazyLoad.load(['MainConstants',
                                 'MainFilters',
                                 'App', 'AppService',
                                 'AuthorizeService',
                                 'MenuService', 'MenuActiveDirective', 'SmartTableDirective',
                                 'TemplateDirective',
                                 'AlertService', 'AlertDirective'
                                ]);
    }

})()

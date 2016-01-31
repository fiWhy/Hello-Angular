(function(){
    'use strict';
    angular.module('app.core')
        .constant('config', configConst())
            .config(config)
            .run(bootstrap);

    function configConst() {
        var apiUrl = '/api';
        return  {
            apiUrl: apiUrl,
            documentRoot: '/app',
            mainPaths: {
                menu: apiUrl + 'menu',
                authorize: apiUrl + 'authorize/:action'
            },
            language: 'en'

        }
    }

    config.$inject = ['$locationProvider', '$translateProvider', 'config'];
    function config($locationProvider, $translateProvider, config) {
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });

        $translateProvider
            .useSanitizeValueStrategy(null)
            .forceAsyncReload(true);

    }

    bootstrap.$inject = ['$ocLazyLoad', '$rootScope', 'config', '$translate'];
    function bootstrap($ocLazyLoad, $rootScope, config, $translate) {
        
         $rootScope.$on('$stateChangeSuccess', function(){
            $translate.use(config.language);
         })
         
        return $ocLazyLoad.load(['App', 'AuthorizeService', 
                                 'MenuService', 'MenuHelperDirective', 
                                 'AlertService', 'AlertDirective']);
    }
    
})()
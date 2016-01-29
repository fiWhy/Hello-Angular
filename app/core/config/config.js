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
            mainPaths: {
                menu: apiUrl + 'menu',
                authorize: apiUrl + 'authorize/:action'
            }
        }
    }

    function config() {
        
    }

    function bootstrap($ocLazyLoad) {
        return $ocLazyLoad.load(['App', 'AuthorizeService', 'MenuService', 'MenuHelperDirective']);
    }
    
})()
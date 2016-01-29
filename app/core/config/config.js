(function(){
    'use strict';
    angular.module('admin.core')
        .constant('config', configConst())
            .config(config)
            .run(bootstrap);


    function config() {
        
    }

    function configConst() {
        var apiUrl = '/api';
            return  {
                apiUrl: apiUrl,
                mainPaths: {
                    menu: apiUrl + 'menu.json',
                    uthorize: apiUrl + 'authorize/:action.json'
                }
            }
    }

    function bootstrap($ocLazyLoad) {
        return $ocLazyLoad.load(['Admin', 'AuthorizeService', 'MenuService', 'MenuHelperDirective']);
    }
    
})()
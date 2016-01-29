(function(){
    'use strict';
    angular.module('admin.core')
        .constant('config', configConst)
            .config(config)
            .run(bootstrap);

    function config() {
        
    }

    function configConst() {
        return {
            apiUrl: '/api/',
            mainPaths: {
                menu: this.apiUrl + 'menu.html'
            }
        }
    }

    function bootstrap($ocLazyLoad) {
        return $ocLazyLoad.load('Menu');
        return $ocLazyLoad.load('Admin');
    }
    
})()
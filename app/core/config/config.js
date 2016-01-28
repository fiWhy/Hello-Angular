(function(){
    'use strict';
    angular.module('admin.core')
            .config(config)
            .run(bootstrap);
    
    function config() {
        
    }

    function bootstrap($ocLazyLoad) {
        $ocLazyLoad.load('Admin');
    }
    
})()
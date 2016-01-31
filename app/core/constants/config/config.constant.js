(function(){
    'use strict';
    angular.module('app.core.constants')
        .constant('config', ConfigConstant());
    
    function ConfigConstant(){
        var apiUrl = '/api';
        return  {
            apiUrl: apiUrl,
            documentRoot: 'app',
            mainPaths: {
                menu: apiUrl + 'menu',
                authorize: apiUrl + 'authorize/:action'
            },
            language: 'en'
        }
    }
})();
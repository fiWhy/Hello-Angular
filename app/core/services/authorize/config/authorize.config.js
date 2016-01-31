(function(){
    'use strict';
    
    angular.module('app.core.services')
        .config(AuthorizeConfig);
    
    AuthorizeConfig.$inject = ['$translateProvider', 'config'];
    function AuthorizeConfig($translateProvider, config){
        $translateProvider.useStaticFilesLoader({
            prefix: config.documentRoot + '/core/services/authorize/languages/',
            suffix: '.json'
        });
    }
})()
(function(){
    'use strict';
    
    angular.module('app.core')
            .service('AppService', AppService);

    AppService.$inject = ['$translate'];
    function AppService($translate) {
        return {
            initLanguage: initLanguage
        }
        
            function initLanguage(lang) {
                $translate.use(lang);
            }
    }
})()
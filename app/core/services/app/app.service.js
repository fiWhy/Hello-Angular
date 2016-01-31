(function(){
    'use strict';
    
    angular.module('app.core.services')
            .service('AppService', AppService);

    AppService.$inject = ['AuthorizeService'];
    function AppService(AuthorizeService) {
        return {
            initLanguage: initLanguage,
            logout: logout,
        }
        
            function initLanguage(lang) {
                $translate.use(lang);
            }
        
            function logout() {
                AuthorizeService.logout();
            }
    }
})()
(function(){
    angular.module('app.core.services', [])
        .config(Services);

    Services.$inject = ['$ocLazyLoadProvider', '$provide'];
    function Services($ocLazyLoadProvider, $provide) {
        $ocLazyLoadProvider.config({
            modules: [
                /* App Service */
                {
                    name: 'AppService',
                    files: [
                        'app/core/services/app/app.service.js',
                    ]
                },
                
                /* Authorize Service */
                {
                    name: 'AuthorizeService',
                    files: [
                        'app/core/services/authorize/authorize.service.js',
                        'app/core/services/authorize/resource/authorize.resource.js',
                        'app/core/services/authorize/config/authorize.config.js'
                    ]
                },

                /* Menu Service */
                {
                    name: 'MenuService',
                    files:[
                        'app/core/services/menu/menu.service.js',
                        'app/core/services/menu/resource/menu.resource.js'
                    ]
                },

                /* Alert Service */
                {
                    name: 'AlertService',
                    files: [
                        'app/core/services/alert/alert.service.js'
                    ]
                },
                
                /* Alert Service */
                {
                    name: 'LoadModules',
                    files: [
                        'app/core/services/loadmodules/loadmodules.service.js'
                    ]
                },
            ]
        })
    }
    
})();
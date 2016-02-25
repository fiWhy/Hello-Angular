(function(){
    angular.module('app.core.services', [])
        .config(Services);

    Services.$inject = ['$ocLazyLoadProvider', '$provide', 'config'];
    function Services($ocLazyLoadProvider, $provide, config) {
        $ocLazyLoadProvider.config({
            modules: [
                /* App Service */
                {
                    name: 'AppService',
                    files: [
                        config.documentRoot + '/core/services/app/app.service.js',
                    ]
                },

                /* Authorize Service */
                {
                    name: 'AuthorizeService',
                    files: [
                        config.documentRoot + '/core/services/authorize/authorize.service.js',
                        config.documentRoot + '/core/services/authorize/resource/authorize.resource.js',
                        config.documentRoot + '/core/services/authorize/config/authorize.config.js'
                    ]
                },

                /* Menu Service */
                {
                    name: 'MenuService',
                    files:[
                        config.documentRoot + '/core/services/menu/menu.service.js',
                        config.documentRoot + '/core/services/menu/resource/menu.resource.js'
                    ]
                },

                /* Alert Service */
                {
                    name: 'AlertService',
                    files: [
                        config.documentRoot + '/core/services/alert/alert.service.js'
                    ]
                },

                /* Alert Service */
                {
                    name: 'LoadModules',
                    files: [
                        config.documentRoot + '/core/services/loadmodules/loadmodules.service.js'
                    ]
                },
            ]
        })
    }

})();

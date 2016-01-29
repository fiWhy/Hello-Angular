(function(){
    angular.module('app.core.services', [])
        .config(Services);

    Services.$inject = ['$ocLazyLoadProvider'];
    function Services($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            modules: [
                /* Authorize Service */
                {
                    name: 'AuthorizeService',
                    files: [
                        'app/core/services/authorize/authorize.service.js',
                        'app/core/services/authorize/resource/authorize.resource.js'
                    ]
                },

                /* Menu Service */
                {
                    name: 'MenuService',
                    files: [
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
            ]
        })
    }
})();
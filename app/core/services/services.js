(function(){
    angular.module('admin.core.services', [])
        .config(Services)

    Services.$inject = ['$ocLazyLoadProvider'];
    function Services($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            modules: [
                /* Menu Service */
                {
                    name: 'AuthorizeService',
                    files: [
                        'app/core/services/authorize/authorize.service.js',
                        'app/core/services/authorize/resource/authorize.resource.js',
                    ],
                },

                /* Menu Service */
                {
                    name: 'MenuService',
                    files: [
                        'app/core/services/menu/menu.service.js',
                        'app/core/services/menu/resource/menu.resource.js',
                    ],
                }
            ]
        })
    }
})()
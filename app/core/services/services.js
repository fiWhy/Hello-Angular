(function(){
    angular.module('admin.core')
        .config(Services)

    Services.$inject = ['$ocLazyLoadProvider'];
    function Services($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            modules: [
                /* Menu Service */
                {
                    name: 'Menu',
                    files: [
                        'app/core/services/menu/menu.service.js',
                        'app/core/services/menu/resource/menu.resource.js',
                        'app/core/directives/menuhelper.directive.js'
                    ],
                }
            ]
        })
    }
})()
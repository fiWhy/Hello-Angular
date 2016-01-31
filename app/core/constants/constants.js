(function(){
    'use strict';
    angular.module('app.core.constants', [])
            .config(Constants);
    
    Constants.$inject = ['$ocLazyLoadProvider'];
    function Constants($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            modules: [
                /* Main Constants */
                {
                    name: 'MainConstants',
                    files: [
                        'app/core/constants/config/config.constant.js',
                        'app/core/constants/loaders/lazy.modules.loader.constant.js',
                        'app/core/constants/loaders/route.modules.loader.constant.js',
                    ]
                }
            ]
        })
    };
})();
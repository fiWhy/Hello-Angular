(function(){
    'use strict';
    angular.module('app.core.constants', [])
            .config(Constants);

    Constants.$inject = ['$ocLazyLoadProvider', 'config'];
    function Constants($ocLazyLoadProvider, config) {
        $ocLazyLoadProvider.config({
            modules: [
                /* Main Constants */
                {
                    name: 'MainConstants',
                    files: [
                        config.documentRoot + '/core/constants/config/config.constant.js',
                        config.documentRoot + '/core/constants/loaders/lazy.modules.loader.constant.js',
                        config.documentRoot + '/core/constants/loaders/route.modules.loader.constant.js',
                    ]
                }
            ]
        })
    };
})();

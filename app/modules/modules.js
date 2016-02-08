(function(){
    'use strict';
    
    angular.module('app.modules', [])
            .config(Modules);
    
    Modules.$inject = ['$ocLazyLoadProvider'];
    function Modules($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            modules : [
                /* Admin */
                {
                    name: 'App',
                    files: [
                        'app/modules/app/app.controller.js'
                        ]
                },
            ]
        })
    }
})()
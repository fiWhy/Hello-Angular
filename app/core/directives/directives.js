(function(){
    'use strict'

    angular.module('app.core.directives', [])
        .config(Directives)

    Directives.$inject = ['$ocLazyLoadProvider'];
    function Directives($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            modules: [
                /* Menu Helper */
                {
                    name: 'MenuHelperDirective',
                    files: [
                        'app/core/directives/menuhelper/menuhelper.directive.js',
                    ],
                }
            ]
        })
    }
})()
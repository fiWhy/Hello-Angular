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
                    name: 'MenuActiveDirective',
                    files: [
                        'app/core/directives/menuactive/menuactive.directive.js',
                    ],
                },

                /* Alert Directive */
                {
                    name: 'AlertDirective',
                    files: [
                        'app/core/directives/alert/alert.directive.js',
                    ],
                },

                /* Template Directive */
                {
                    name: 'TemplateDirective',
                    files: [
                        'app/core/directives/template/template.directive.js',
                    ],
                },

            ]
        })
    }
})()

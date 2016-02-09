(function(){
    'use strict'

    angular.module('app.core.directives', ['app.core'])
        .config(Directives)

    Directives.$inject = ['$ocLazyLoadProvider', 'config'];
    function Directives($ocLazyLoadProvider, config) {
        $ocLazyLoadProvider.config({
            modules: [
                /* Menu Helper */
                {
                    name: 'MenuActiveDirective',
                    files: [
                        config.documentRoot + '/core/directives/menuactive/menuactive.directive.js',
                    ],
                },

                /* Alert Directive */
                {
                    name: 'AlertDirective',
                    files: [
                        config.documentRoot + '/core/directives/alert/alert.directive.js',
                    ],
                },

                /* Template Directive */
                {
                    name: 'TemplateDirective',
                    files: [
                        config.documentRoot + '/core/directives/template/template.directive.js',
                    ],
                },

                /* Smart table Directive */
                {
                    name: 'SmartTableDirective',
                    files: [
                        config.documentRoot + '/core/directives/template/template.directive.js',
                    ],
                },

            ]
        })
    }
})()

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
                        'app/modules/app/app.controller.js',
                        'app/core/services/app/app.service.js',
                        ]
                },
                
                /* Dashboard */
                {
                    name: 'Dashboard',
                    files: [
                        'app/modules/dashboard/dashboard.module.js',
                        'app/modules/dashboard/dashboard.controller.js',
                        'app/modules/dashboard/service/dashboard.service.js',
                        //'app/modules/dashboard/language/dashboard.languages.js',
                        'app/modules/dashboard/dashboard.routes.js',
                    ]
                },
                
                /* Login */
                {
                    name: 'Login',
                    files: [
                        'app/modules/login/login.module.js',
                        'app/modules/login/config/login.config.js',
                        'app/modules/login/login.controller.js',
                        'app/modules/login/service/login.service.js',
                        'app/modules/login/login.routes.js',
                        'css/pages/signin.css'
                    ]
                }
            ]
        })
    }
})()
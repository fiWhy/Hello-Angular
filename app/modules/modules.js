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
                
                /* Dashboard */
                {
                    name: 'Dashboard',
                    files: [
                        'app/modules/dashboard/dashboard.module.js',
                        'app/modules/dashboard/dashboard.controller.js',
                        'app/modules/dashboard/service/dashboard.service.js',
                        'app/modules/dashboard/dashboard.routes.js'
                    ]
                },
                
                /* Login */
                {
                    name: 'User',
                    files: [
                        'app/modules/user/user.module.js',
                        'app/modules/user/config/user.config.js',
                        'app/modules/user/user.controller.js',
                        'app/modules/user/user.login.controller.js',
                        'app/modules/user/service/user.service.js',
                        'app/modules/user/user.routes.js',
                        'css/pages/signin.css'
                    ]
                }
            ]
        })
    }
})()
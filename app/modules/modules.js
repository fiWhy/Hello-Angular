(function(){
    'use strict';
    
    angular.module('admin.modules', [])
            .config(Modules);
    
    Modules.$injector = ['$ocLazyLoadProvider'];
    function Modules($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            modules : [
                /* Admin */
                {
                    name: 'Admin',
                    files: [
                        'app/modules/admin/admin.controller.js',
                        'app/core/services/admin/admin.service.js',
                        'app/core/services/menu/menu.service.js',
                        'app/core/directives/menuhelper.directive.js'
                        ]
                },
                
                /* Dashboard */
                {
                    name: 'Dashboard',
                    files: [
                        'app/modules/dashboard/dashboard.module.js',
                        'app/modules/dashboard/dashboard.controller.js',
                        'app/modules/dashboard/service/dashboard.service.js',
                        'app/modules/dashboard/dashboard.routes.js',
                    ]
                },
                
                /* Login */
                {
                    name: 'Login',
                    files: [
                        'app/modules/login/login.module.js',
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
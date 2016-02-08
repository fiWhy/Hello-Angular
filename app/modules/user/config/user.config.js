(function(){
    'use strict';

    angular.module('app.modules')
        .config(files)
        .config(config);
    
    files.$inject = ['$ocLazyLoadProvider'];
    function files($ocLazyLoadProvider) {
         $ocLazyLoadProvider.config({
            modules : [
         /* Login */
                {
                    name: 'User',
                    files: [
                        'app/modules/user/config/user.config.js',
                        'app/modules/user/controller/user.controller.js',
                        'app/modules/user/controller/user.login.controller.js',
                        'app/modules/user/service/user.service.js',
                        'css/pages/signin.css'
                    ]
                },
                ]
         })
    }
    
    config.$inject = ['$translateProvider', 'config', '$stateProvider'];
    function config($translateProvider, config, $stateProvider) {
        console.log('Init User Config');
        $stateProvider.state('app.user', {
                                                                                                                            url: "user/:controller",
                views: {
                   content: {
                        controllerProvider: function($stateParams) {
                            var ctrlName = 'User' + ($stateParams.controller|| '') + "Controller as vm";
                            return ctrlName;
                        },
                       templateUrl: function($stateParams) {
                           var tmp = $stateParams.controller? $stateParams.controller.toLowerCase() + '.': '';
                            var fullTemplate = config.documentRoot + '/modules/user/view/user.' + tmp + 'template.html';
                           
                           return fullTemplate;
                       }
                   } 
                },
                resolve: {
                    loadModules: ['$ocLazyLoad', '$timeout', function($ocLazyLoad, $timeout){      
                        
                    $translateProvider.useStaticFilesLoader({
                        prefix: config.documentRoot + '/modules/user/languages/',
                        suffix: '.json'
                    });
        
                        return $ocLazyLoad.load('User');
                    }]
                }
            })
    };

})();
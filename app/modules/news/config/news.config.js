(function(){
    'use strict';

    angular.module('app.modules')
        .config(files)
        .config(config);

    files.$inject = ['$ocLazyLoadProvider', 'config'];
    function files($ocLazyLoadProvider, config) {
         $ocLazyLoadProvider.config({
            modules : [
         /* Login */
                {
                    name: 'News',
                    files: [
                        config.documentRoot + '/modules/news/controller/news.controller.js',
                        config.documentRoot + '/modules/news/service/news.service.js',
                        config.documentRoot + '/modules/news/service/news.service.js',
                        '/css/pages/faq.css'
                    ]
                },
                ]
         })
    }

    config.$inject = ['$translateProvider', 'config', '$stateProvider'];
    function config($translateProvider, config, $stateProvider) {
        console.log('Init News Config');
        $stateProvider.state('app.news', {
                url: "news",
                views: {
                   content: {
                        controllerProvider: function($stateParams) {
                            var ctrlName = 'News' + ($stateParams.controller|| '') + "Controller as vm";
                            return ctrlName;
                        },
                       templateUrl: function($stateParams) {
                           var tmp = $stateParams.controller? $stateParams.controller.toLowerCase() + '.': '';
                            var fullTemplate = config.documentRoot + '/modules/news/view/news.' + tmp + 'template.html';

                           return fullTemplate;
                       }
                   }
                },
                resolve: {
                    loadModules: ['$ocLazyLoad', '$timeout', function($ocLazyLoad, $timeout){

                    $translateProvider.useStaticFilesLoader({
                        prefix: config.documentRoot + '/modules/news/languages/',
                        suffix: '.json'
                    });

                        return $ocLazyLoad.load('News');
                    }]
                }
            })
    };

})();

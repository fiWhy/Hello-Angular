(function(){
    'use strict';

    angular.module('app.modules.login')
        .config(config);

    config.$inject = ['$translateProvider', 'config'];
    function config($translateProvider, config) {
        $translateProvider.useStaticFilesLoader({
            prefix: config.documentRoot + '/modules/login/languages/',
            suffix: '.json'
        });
    };

})();
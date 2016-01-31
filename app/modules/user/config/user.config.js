(function(){
    'use strict';

    angular.module('app.modules.user')
        .config(config);

    config.$inject = ['$translateProvider', 'config'];
    function config($translateProvider, config) {
        $translateProvider.useStaticFilesLoader({
            prefix: config.documentRoot + '/modules/user/languages/',
            suffix: '.json'
        });
    };

})();
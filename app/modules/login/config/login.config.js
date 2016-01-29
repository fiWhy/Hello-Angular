(function(){
    'use strict';

    angular.module('app.modules.login')
        .config(config);

    config.$inject = ['$translateProvider'];
    function config($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'app/modules/login/languages/',
            suffix: '.json'
        });
    };

})();
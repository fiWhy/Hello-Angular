(function(){
    'use strict';

    angular.module('app.modules.dashboard')
        .config(config);

    config.$inject = ['$translateProvider', 'DashboardLanguage'];
    function config($translateProvider, DashboardLanguage) {
        $translateProvider.translations('en', DashboardLanguage.en)
        $translateProvider.translations('ru', DashboardLanguage.ru)
    }

})();
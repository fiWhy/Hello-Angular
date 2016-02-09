(function(){
    'use strict';

    angular.module('app', [
        /* System */
        'ngAnimate',
        'oc.lazyLoad',
        'ngResource',
        'pascalprecht.translate',
        'angular-loading-bar',
        'ui.router',

        'app.config',
        'app.core',
        'app.modules'
    ]);
})()

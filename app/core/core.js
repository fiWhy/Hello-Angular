(function(){
    'use strict';
    
    angular.module('app.core', [
        'oc.lazyLoad',

        'app.core.services',
        'app.core.directives',

        'ngAnimate',
        'ngResource',
        'angular-loading-bar',
        'ui.router',
    ]);
})()
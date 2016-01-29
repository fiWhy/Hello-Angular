(function(){
    'use strict';
    
    angular.module('admin.core', [
        'oc.lazyLoad',

        'admin.core.services',
        'admin.core.directives',

        'ngAnimate',
        'ngResource',
        'angular-loading-bar',
        'ui.router',
    ]);
})()
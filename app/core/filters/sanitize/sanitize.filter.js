(function(){
    'use strict';
    angular.module('app.core.filters')
        .filter('sanitize', sanitize);

    sanitize.$inject = ['$sce']
    function sanitize($sce) {
        return function(value) {
            return $sce.trustAsHtml(value);
        }
    }

})()
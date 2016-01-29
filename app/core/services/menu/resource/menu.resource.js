/**
 * Created by denis on 29.01.16.
 */
(function(){
    'use strict';
    angular.module('app.core.services')
        .service('MenuResource', MenuResource)

    MenuResource.$inject = ['config', '$resource']
    function MenuResource(config, $resource) {
        return $resource(config.mainPaths.menu);
    }
})()
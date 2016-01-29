/**
 * Created by denis on 29.01.16.
 */
(function(){
    'use strict';
    angular.module('admin.core')
        .service('MenuResource', MenuResource)

    MenuResource.$inject = ['config', '$resource']
    function MenuResource(config, $resource) {
        return $resource(config.mainPaths.menu);
    }
})()
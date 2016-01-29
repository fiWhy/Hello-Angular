(function(){
    'use strict'

    angular.module('app.core.services')
        .service('AuthorizeResource', AuthorizeResource)

    AuthorizeResource.$inject = ['config', '$resource'];
    function AuthorizeResource(config, $resource) {
        return $resource(config.mainPaths.authorize);
    }
})()
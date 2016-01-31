(function(){
    'use strict';
    
    angular.module('app.core.services')
        .service('LoadModules', LoadModules);
    
    LoadModules.$inject = ['$ocLazyLoad', '$timeout', 'config'];
    function LoadModules($ocLazyLoad, $timeoutreturn, config) {
        return {
            prepare: prepare
        };
                          
        function prepare(modulesList) {
            var modules = [],
        
            if(Array.isArray(modules)) {
                modulesList.forEach(function(value){
                    modules.push(config.modulesRoot + '/' + value + '/' + value + '.module.js');
                })
            } else {
                 modules.push(config.modulesRoot + '/' + modules + '/' + modules + '.module.js');
            }
            
            $ocLazyLoad.load(modules);
        }
                        
    }
})()
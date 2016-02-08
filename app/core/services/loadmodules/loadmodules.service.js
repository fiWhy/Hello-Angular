(function(){
    'use strict';
    
    angular.module('app.core.services')
        .service('LoadModules', LoadModules);
    
    LoadModules.$inject = ['$ocLazyLoad', '$timeout', 'config', '$state', '$stateParams'];
    function LoadModules($ocLazyLoad, $timeoutreturn, config, $state, $stateParams) {
        return {
            prepare: prepare
        };
                          
        function prepare(modulesList) {
            var modules = [];
        
            if(Array.isArray(modules)) {
                modulesList.forEach(function(value){
                    modules.push(config.modulesRoot + '/' + value + '/config/' + value + '.config.js');
                })
            } else {
                 modules.push(config.modulesRoot + '/' + modules + '/config/' + modules + '.config.js');
            }
            
            return $ocLazyLoad.load(modules)
        }
                        
    }
})()
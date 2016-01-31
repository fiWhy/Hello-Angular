(function(){
    'use stict';
    angular.module('app.core.constants')
        .constant('RouteModulesLoader', RouteModulesLoader);
    
    function RouteModulesLoader(modules) {
         return {
            loadModules: ['$ocLazyLoad', '$timeout', function($ocLazyLoad, $timeout){
                    return $ocLazyLoad.load(modules);
            }]
        }
    }
})();
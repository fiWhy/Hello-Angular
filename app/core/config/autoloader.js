(function(){
    'use strict';
    angular.module('app.core.autoloader', ['app.core.services'])
        .run(Autoloader);
    
    Autoloader.$inject = []
    function Autoloader() {
//        LoadModules.prepare([
//            'dashboard',
//            'menu'
//        ])
    }
})();
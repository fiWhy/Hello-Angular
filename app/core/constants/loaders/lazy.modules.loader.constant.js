(function(){
    'use stict';
    angular.module('app.core.constants')
        .constant('LazyModulesLoader', LazyModulesLoader);
    
    LazyModulesLoader.$inject = ['config'];
    function LazyModulesLoader(config) {
         return function(files){
            var load = [];
            if(Array.isArray(files)) {
                files.forEach(function(value) {
                    load.push(config.documentRoot + value);
                });
            }else {
                load.push(config.documentRoot + files);
            }
            console.log(load);
            return load;
        }
    }
})();
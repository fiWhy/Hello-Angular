(function(){
    'use strict';

    angular.module('app.modules.user', [])
        .run(initModule);
    
    initModule.$inject = ['$ocLazyLoad'];
    function initModule($ocLazyLoad) {
        console.log('User initiate!');
    }

})();
(function(){
    'use strict';
    angular.module('app.core.filters', [])
            .config(Filters);

    Filters.$inject = ['$ocLazyLoadProvider', 'config'];
    function Filters($ocLazyLoadProvider, config) {
       $ocLazyLoadProvider.config({
          modules: [
               /* All Filters */
               {
                  name: 'MainFilters',
                  files: [
                     config.documentRoot + '/core/filters/range/range.filter.js',
                  ]
               }
         ]
      })
   }
})();

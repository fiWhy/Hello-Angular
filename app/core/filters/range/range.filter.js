(function(){
   'use strict';
   angular.module('app.core.filters')
         .filter('range', RangeFilter);


   function RangeFilter() {
      return function(input, total) {
          total = parseInt(total);
          for (var i = 1; i<total; i++) {
            input.push(i);
          }

          return input;
        };
   }

})()

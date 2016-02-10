(function(){
   'use strict';
   angular.module('app.modules')
         .service('NewsResource', NewsResource);

   NewsResource.$inject = ['$resource'];
   function NewsResource($resource) {
      return $resource('test.json', {}, {

      });
   }

})()

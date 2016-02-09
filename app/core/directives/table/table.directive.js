(function(){
    'use strict';
    angular.module('app.core.directives')
        .directive('smartTable', SmartTable);

    function SmartTable() {
        return {
            restrict: 'E',
            scope: {
                marking: '@',
            },
            controller: function($scope, $element, $attr) {
              console.log($scope.marking);
            }
        }
    }

})()

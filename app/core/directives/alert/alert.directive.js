(function(){
    'use strict';
    
    angular.module('app.core.directives')
            .directive('alert', AlertDirective);
    
    AlertDirective.$inject = ['$timeout', 'config'];
    function AlertDirective($timeout, config) {
        return {
            restrict: 'E',
            replace: true,
            transclude: true, 
            scope: {
                type: '=',
                block: '=',
            },
            templateUrl: config.documentRoot + '/core/directives/alert/templates/alert.template.html',   
            controller: function($scope, $element) {
                console.log($scope.type);
                $scope.destroy = function(){
                    $timeout(function(){
                        $element.fadeOut();
                    }, 1500)
                }
            }
        }
    }
})();
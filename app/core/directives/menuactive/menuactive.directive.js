(function(){
    'use strict';
    angular.module('app.core.directives')
        .directive('menuActive', MenuActiveDirective);

    MenuActiveDirective.$inject = ['$rootScope', '$state', '$timeout'];
    function MenuActiveDirective($rootScope, $state, $timeout) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
              scope.$watch(function(){ return element.hasClass('active'); }, function(newVal, oldVal){
                $('li.active').removeClass('active');
                  element.parents('li').addClass('active');
              })
            }
        }
    }

})()

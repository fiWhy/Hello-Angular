(function(){
    'use strict';
    
    angular.module('admin.core')
        .directive('menuHelper', menuHelper);
    
    menuHelper.$inject = ['$rootScope', '$state', '$timeout'];
    function menuHelper($rootScope, $state, $timeout) {
        
        function makeActive(el){
                $('li.active').removeClass('active');
                var a = el.parent().find('a[data-ui-sref="' + $state.current.name +'"]');
                    a.parents('li').addClass('active');
        }
        
        return {
            restrict: 'A',
            link: function($scope) {
                if($scope.$last){
                    $timeout(function () {
                        $scope.$emit('ngRepeatFinished');
                    })
                }
            },
            controller: function($scope, $element) {
                $scope.$on('ngRepeatFinished', function(){
                        makeActive($element);
                })
                $rootScope.$on('$stateChangeSuccess', function(){
                        makeActive($element);
                 })
            }
        }
    }
    
})()
(function(){
    angular.module('app.core.directives')
        .directive('tableSearching', tableSearching);

    tableSearching.$inject = ['$timeout']
    function tableSearching($timeout) {
        return {
            restrict: 'E',
            require: '^smartTable',
            template: '<div class="col-md-3 smart-editable-field search">' +
                        '<input data-ng-model="searching" placeholder="{{ \'TABLE_SEARCH\' | translate }}">' +
                        '</div>',
            controller: function($scope, $element, $attrs) {
                var firstAsk = true,
                    timer;
                $scope.$watch('searching', function(newVal){

                    if(!firstAsk) {
                        $timeout.cancel(timer);
                        timer = $timeout(function(){
                            $scope.search(newVal);
                        }, 500);

                    }

                    if(!newVal && firstAsk)
                        firstAsk = false;
                })
            }
        }
    }
})();
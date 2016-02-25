(function(){
    'use strict';
    angular.module('app.core.directives')
        .directive('smartTable', SmartTable);

    SmartTable.$inject = ['config', '$translate', '$filter'];
    function SmartTable(config, $translate, $filter) {

      function prepareHead(fields) {
         var result = [],
             title;
         for(var item in fields) {
            if(!fields[item].title)
               throw 'Title must be set to all fields!';
            title = fields[item].title;
            result.push(title);
         }
         return result;
      }

      function prepareBody(fields, data) {
         var result = [],
             field;
            data.forEach(function(value, rowIndex){
               var td = [];
               fields.forEach(function(cellValue, cellIndex){
                  if(!value[cellValue.field])
                     throw 'Field name is not set in data array! Got ' + cellValue.field + ' in "' + cellValue.field + '"';

                     var settings = {};
                        field = {
                            value: value[cellValue.field],
                            field: cellValue.field,
                            id: value.id
                        };
                        settings.cellIndex = cellIndex;
                        settings.rowIndex = rowIndex;
                        settings.data = field;
                        settings.editable = cellValue.editable
                        if(settings.editable && !settings.type)
                            settings.type = cellValue.type || 'input';


                     td.push(settings);
               })
               result.push({
                 rowIndex: rowIndex,
                 rowData: td
               });
            })
         return result;
      }
        return {
            restrict: 'E',
            scope: {
                marking: '=',
                data: '=',
                title: '@',
                pagination: '=',
                countPages: '=',
                currentPage: '=',
                singleEdit: '=',
                multipleEdit: '='
            },
            templateUrl: config.documentRoot +  '/core/directives/table/templates/table.template.html',
            controller: function($scope, $element, $attrs) {
               $scope.$watch('data', function(newVal){
                  console.log('Waiting for data!');
                  if(newVal.length){
                     if(!$scope.marking || !$scope.marking.fields)
                        throw 'You must set markig and fields of it!';

                     var fields = $scope.marking.fields;
                      var deeds = $scope.marking.deeds;

                     $scope.head = prepareHead(fields);
                     $scope.body = prepareBody(fields, newVal);

                      if(deeds.searchable && deeds.searchable.isset)
                            $scope.search = deeds.searchable.callback;
                      if(deeds.removeable && deeds.removeable.isset){
                          $scope.remove = deeds.removeable.callback;
                      }

                     $scope.fieldEdit = function(data) {
                        $scope.singleEdit(data);
                     }

                  }
               })
            }
        }
    }

})()

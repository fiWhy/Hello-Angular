(function(){
    'use strict';
    angular.module('app.core.directives')
        .directive('smartTable', SmartTable);

    SmartTable.$inject = ['config', '$translate', '$filter'];
    function SmartTable(config, $translate, $filter) {

      function prepereHead(fields) {
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
            data.forEach(function(value){
               var td = [];
               for(var item in fields) {
                  if(!value[fields[item].field])
                     throw 'Field name is not set in data array! Got ' + fields[item].field + ' in "' + item + '"';
                     var settings = {};
                        field = {
                            value: value[fields[item].field],
                            id: value.id
                        };
                        settings.data = field;
                        settings.editable = fields[item].editable
                        if(settings.editable && !settings.type)
                            settings.type = fields[item].type || 'input';


                     td.push(settings);

               }
               result.push(td);
            })
         return result;
      }

        return {
            restrict: 'E',
            scope: {
                marking: '=',
                data: '=',
                title: '@',
                pagination: '&',
                countPages: '=',
                currentPage: '=',
            },
            templateUrl: config.documentRoot +  '/core/directives/table/templates/table.template.html',
            controller: function($scope, $element, $attrs) {
               $scope.$watch('data', function(newVal){
                  console.log('Waiting for data!');
                  if(newVal.length){
                     if(!$scope.marking || !$scope.marking.fields)
                        throw 'You must set markig and fields of it!';

                     var fields = $scope.marking.fields;

                     $scope.head = prepereHead(fields);
                     $scope.body = prepareBody(fields, newVal);

                     $scope.getPage = $scope.pagination();

                     var singleNewData,
                         singleBeforeData;

                     $scope.singleFieldEdit = function(newData, beforeData) {
                         singleNewData = newData;
                         singleBeforeData = beforeData;

                        //  console.log(newData);
                        //  console.log(beforeData);

                        console.log('dbl');
                     }

                     $scope.cancelEditing = function(){
                         singleNewData = singleBeforeData;
                     }

                  }
               })
            }
        }
    }

})()

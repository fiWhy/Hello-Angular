(function(){
	'use strict';
	angular.module('app.core.directives')
			.directive('fieldIsEditable', fieldIsEditable);

	fieldIsEditable.$inject = ['$compile'];
	function fieldIsEditable($compile) {

		function clone(obj) {
    		if (null == obj || "object" != typeof obj) return obj;
    			var copy = obj.constructor();
    			for (var attr in obj) {
        			if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    			}
    		return copy;
		}
		function transformField($element) {

		}

		function appendCancelEdition($element) {
			var el = $element
						.append('<button class="btn btn-danger" data-ng-click="cancelCurrentEdition();">Cancel</button>')
						.find('.btn-danger');
				return el;
		}

		function appendField($element, data, successCallback) {
			var input;
			var block = $('<div />', {
				class: 'editable-field'
			});

			switch(data.type){
				case 'textarea':
					input = '<textarea data-ng-model="fieldData"></textarea>';
					break;
				case 'input':
					input = '<input data-ng-model="fieldData">';
					break;
			}

			input+= '<button data-ng-click="finishEditing()" type="submit" class="btn btn-primary">Save</button>';

			var el = $element.append(block.append(input)).find('.editable-field');

				if(successCallback)
					successCallback(el);
		}

		return {
			restrict: 'A',
			require: '^smartTable',
			transclude: true,
			template:'<data-ng-transclude></data-ng-transclude>',
			controller: function($scope, $element, $attrs){
				var input;
				var showAble;
				var cancelEdition;
				var beforeData,
					newData = {};

				$scope.fieldData;

				function blocksToggle(){
						showAble.toggle();
						input.toggle();
				}

				$scope.appendEditable = function(data) {
					beforeData = clone(data);
					appendField($element, data, function(el){
						input = el;
						$scope.fieldData = data.data.value;
						$compile(el)($scope);
							el.css('display', 'none');
					});

				}

				$scope.dblclick = function(){
					showAble = $element.find('.showable-field');
						blocksToggle();
				}

				$scope.finishEditing = function(){
					console.log(beforeData);
					newData = clone(beforeData);
						newData.data.value = $scope.fieldData;
					$scope.$parent.singleFieldEdit(newData, beforeData);
						blocksToggle();
						if(!cancelEdition) {
							cancelEdition = appendCancelEdition($element);
							$compile(cancelEdition)($scope);
						} else {
							cancelEdition.show();
						}
				}

				$scope.cancelCurrentEdition = function() {
						newData = beforeData;
						$scope.$parent.singleFieldEdit(newData, beforeData);
						cancelEdition.hide();
				}

			}
		}
	}
})()

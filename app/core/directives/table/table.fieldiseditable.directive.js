(function(){
	'use strict';
	angular.module('app.core.directives')
			.directive('fieldIsEditable', fieldIsEditable);

	fieldIsEditable.$inject = ['$compile'];
	function fieldIsEditable($compile) {

		function appendField($element, data, successCallback) {
			var input;
			var block = $('<div />', {
				class: 'editable-field'
			});

			switch(data.type){
				case 'textarea':
					input = '<textarea class="smart-editable-field" data-ng-model="fieldData.data.value"></textarea>';
					break;
				case 'input':
					input = '<input class="smart-editable-field" data-ng-model="fieldData.data.value">';
					break;
			}

			input+= '<button data-ng-click="finishEditing()" type="submit" class="btn btn-primary">Save</button>';

			var el = $element.append(block.append(input)).find('.editable-field');

				if(successCallback)
					successCallback(el);
		}

		function compact(data) {
				var newData = {};
					newData[data.field] = data.value;
					newData.id = data.id;
				return newData;
		}

		return {
			restrict: 'A',
			require: '^smartTable',
			transclude: true,
			template:'<data-ng-transclude></data-ng-transclude>',
			controller: function($scope, $element, $attrs){
				var input;
				var showAble;

				$scope.fieldData;

				function blocksToggle() {
						showAble.toggle();
						input.toggle();
				}

				$scope.appendEditable = function(data) {
					appendField($element, data, function(el){
						input = el;

						$scope.fieldData = data;

						$compile(el)($scope);
							el.css('display', 'none');
					});

				}

				$scope.dblclick = function(){
					showAble = $element.find('.showable-field');
						blocksToggle();
				}

				$scope.finishEditing = function() {
						$scope.singleEdit(compact($scope.fieldData.data));
						blocksToggle();
				}

			}
		}
	}
})()

(function(){
    'use strict';
    angular.module('app.core.directives')
        .directive('template', TemplateDirective);
    
    TemplateDirective.$inject = ['config', '$compile'];
    function TemplateDirective(config, $compile) {
        return {
            restrict: 'A',
            scope: false,
            link: function(scope, element, attrs) {
                var template = config.documentRoot + attrs.template;
                    element.append($compile('<data-ng-include src="\'' + template +'\'"></data-ng-include>')(scope));
            }
        }
    }
})()
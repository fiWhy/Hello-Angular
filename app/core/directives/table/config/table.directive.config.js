(function(){
	'use strict';
	console.log('Table config');
	angular.module('app.core.directives')
			.config('TableDirectiveConfig', TableDirectiveConfig);

	TableDirectiveConfig.$inject = ['$translateProvider', 'config'];
	function TableDirectiveConfig() {
		$translateProvider.useStaticFilesLoader({
			prefix: config.documentRoot + '/core/directives/table/languages',
			suffix: '.json'
		});
	}
})()

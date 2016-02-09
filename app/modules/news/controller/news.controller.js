(function(){
    'use strict';

    angular.module('app.modules')
            .controller('NewsController', NewsController);


    NewsController.$inject = ['config', 'AuthorizeService', '$translate', 'AlertService'];
    function NewsController(config, AuthorizeService, $translate, AlertService) {
        var vm = this;

        activate();

        function activate() {
        }


        console.log('User page');
    }
})();

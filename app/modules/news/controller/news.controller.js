(function(){
    'use strict';

    angular.module('app.modules')
            .controller('NewsController', NewsController);


    NewsController.$inject = ['config', 'AuthorizeService', '$translate', 'AlertService', 'NewsService'];
    function NewsController(config, AuthorizeService, $translate, AlertService, NewsService) {
        var vm = this;

        vm.news = [];
        vm.countNews;

        vm.getPage = getPage;
        vm.perPage = 1;

        vm.shortEdit = shortEdit;
        vm.edit = edit;
        vm.search = search;
        vm.remove = remove;

        activate();

        function activate() {
           console.log('News')
           var news = NewsService.getData('test');
           vm.news = news['New'];
           vm.countPages = Math.ceil(news.count/vm.perPage);
        }

        function getPage(page) {
            console.log(page);
        }

        function shortEdit(data) {
            console.log(data);
        }

        function edit(data) {
            console.log(data);
        }

        function search(data) {
            console.log(data);
        }

        function remove(id) {
            console.log(id);
        }


        console.log('News page');
    }
})();

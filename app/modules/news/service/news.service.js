(function(){
    'use strict';
    angular.module('app.modules')
          .service('NewsService', NewsService);

    NewsService.$inject = ['NewsResource']
    function NewsService(NewsResource) {
        var url;
        return {
            setUrl: setUrl,
            getData: getData
        };


        function setUrl(newUrl) {
           url = newUrl;
           return this;
        }

        function getData(newUrl) {
           if(!newUrl)
               if(!url)
               throw 'Url must be set!';

               return {
                  count: 3,
                  New: [
                     {
                        id: 1,
                        title: 'Title 1',
                        content: 'Content 1',
                     },
                     {
                        id: 2,
                        title: 'Title 2',
                        content: 'Content 2',
                     },
                     {
                        id: 3,
                        title: 'Title 3',
                        content: 'Content 3',
                     }
                  ]
               };
        }
    }
})()

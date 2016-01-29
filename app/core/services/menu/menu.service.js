(function(){
    'use strict';

    angular.module('admin.core')
            .service('MenuService', MenuService);

    function MenuService(){
        return {
            getMainMenu: getMainMenu
        }

        function getMainMenu() {
            return [
                {
                    title: 'Dashboard',
                    icon: 'icon-dashboard',
                    state: 'admin.dashboard',
                    link: '/dashboard'
                },
                {
                    title: 'Drops',
                    icon: 'icon-long-arrow-down',
                    nextLevel: [
                        {
                            title: 'Login',
                            icon: 'icon-dashboard',
                            state: 'admin.login',
                            link: '/login',
                        }
                    ]
                }
            ]
        }
    }

})()
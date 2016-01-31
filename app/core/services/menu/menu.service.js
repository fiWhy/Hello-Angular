(function(){
    'use strict';

    angular.module('app.core.services')
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
                    state: 'app.dashboard',
                    link: '/dashboard'
                },
                {
                    title: 'Drops',
                    icon: 'icon-long-arrow-down',
                    nextLevel: [
                        {
                            title: 'Login',
                            icon: 'icon-dashboard',
                            state: "app.user({'controller': 'login'})",
                            link: '/user',
                        },
                    ]
                },
                {
                    title: 'Logout',
                    icon: 'icon-dashboard',
                    state: "app.user('controller':'Logout')",
                    link: '/user/logout',
                }
            ]
        }
    }

})()
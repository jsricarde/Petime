'use strict';

angular.module('Petime', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

        // route for the home page
            .state('app', {
            url: '/',
            views: {
                'header': {
                    templateUrl: 'views/header.html',
                },
                'content': {
                    templateUrl: 'views/home.html',
                    controller: 'IndexController'
                },
                'footer': {
                    templateUrl: 'views/footer.html',
                    controller: 'IndexController'
                }
            }

        })
        $urlRouterProvider.otherwise('/');
    });
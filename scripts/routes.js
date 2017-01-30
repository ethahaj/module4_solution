(function () {

 'use strict';

 angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'home.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'categories.html',
                controller: 'CategoriesController as ctrlCatg',
                resolve: {
                    menuCategories: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('itemDetail', {
                url: '/item-detail/{itemId}',
                templateUrl: 'itemDetail.html',
                controller: 'ItemDetailController as ctrlItem',
                resolve:{
                    itemDetails:[ '$stateParams', 'MenuDataService', function($stateParams, MenuDataService){
                        return MenuDataService.getItemsForCategory($stateParams.itemId);
                    }]
                }
            }
            );
    }






})();
(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['menuCategories'];
    function CategoriesController(menuCategories) {
        var ctrlCatg = this;
        ctrlCatg.menuCategories = menuCategories.data;
    }
    
})();
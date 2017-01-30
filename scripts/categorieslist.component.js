(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categoryList', {
            templateUrl: 'category.template.html',
           
            bindings: {
                items: '<'
            }
        });

  

})();
(function () {
    'use strict';

    angular.module('MenuApp')
        .component('itemList', {
            templateUrl: 'itemDetail.template.html',
           
            bindings: {
                items: '<'
            }
        });

  

})();
(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemDetailController', ItemDetailController);

    ItemDetailController.$inject = ['itemDetails'];
    function ItemDetailController(itemDetails) {
        var ctrlItem = this;
        ctrlItem.itemDetails = itemDetails.data.menu_items;
    }
    
})();
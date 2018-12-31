(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);



ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getItems();
  toBuy.removeItem = function (itemIndex) {

      ShoppingListCheckOffService.removeItem(itemIndex);
    };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var Bought = this;

  Bought.elements = ShoppingListCheckOffService.getElements();


}

// If not specified, maxItems assumed unlimited
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = [{ name: "cookies", quantity: 10 },{ name: "chips", quantity: 10 },
{ name: "coke", quantity: 5 },{ name: "sweets", quantity: 20 },{ name: "candies", quantity: 25 }];

  // var BoughtItems = [];
  var elements = [];

  service.removeItem = function (itemIndex) {
      elements.push(items[itemIndex]);
      items.splice(itemIndex,1);
  }


  service.getItems = function () {
    return items;
  };

  service.getElements = function () {
    return elements;
  }
}


})();

(function() {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchController', LunchController);

  LunchController.$inject = ['$scope'];

  function LunchController($scope) {
    $scope.dishes = "";
    $scope.msg = "";
    $scope.CheckDishes = function() {
      var NumbDishes = calcNbDishes($scope.dishes);

      if (NumbDishes === 0) {
        var message = "Empty! Please enter data first !";
      } else if (NumbDishes <= 3) {
        var message = "Enjoy !";
      } else if (NumbDishes > 3) {
        var message = "That's too much !"
      }
      $scope.msg = message;
    };

    function calcNbDishes(dishes) {
      var Nb = 0;
      if (dishes) {
        var list = dishes.split(',');
        for (var elt in list) {
          if (list[elt].trim().length != 0) {
            Nb++;
          }
        }
      }
      return Nb;
    }

  }

})();

angular.module('appVehiculos').controller('CarCompareCtrl', [
  '$scope',
  'CompareCarsService',
  function ($scope, CompareCarsService){
    $scope.carsToCompare = CompareCarsService.getAll();
  }
]);

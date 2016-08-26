angular.module('appVehiculos').controller('CarDescriptionCtrl', [
  '$scope',
  '$routeParams',
  'CarService',
  function ($scope, $routeParams, CarService){

    $scope.car = {};

    $scope.getCar = function(id){
      CarService.getCar(id, function(err, response){
        if (err){
          Materialize.toast(err, 3000);
        } else {
          $scope.car = response.data;
        }
      })
    };

    if ($routeParams.id){
      $scope.getCar($routeParams.id);
    }
  }
]);

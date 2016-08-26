angular.module('appVehiculos').controller('CarCtrl', [
  '$scope',
  '$routeParams',
  '$location',
  'CarService',
  'CompareCarsService',
  function($scope, $routeParams, $location, CarService, CompareCarsService){

    $scope.cars = [];
    CompareCarsService.reset();

    $scope.compare = function(){

      if (CompareCarsService.getAll().length > 1){
        $location.path('/compare/');
      } else {
        Materialize.toast('Necesitas selccionar minimo 2 vehiculos', 3000);
      }
    };

    $scope.addSelected = function(item){
      CompareCarsService.add(item);
    };

    $scope.deleteSelected = function(item){
      CompareCarsService.remove(item);
    };

    $scope.getCars = function(){
      CarService.getCars(function(err, response) {
        if (err){
          console.error(err);
        } else {
          $scope.cars = response.data;
        }
      });
    };

    $scope.getCars();
  }
]);

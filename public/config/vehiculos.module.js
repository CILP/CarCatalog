angular.module('appVehiculos', ['ngRoute']).constant(
  'BASE_URL', 'http://localhost:3000/api'
).config([
  '$routeProvider',
  function($routeProvider){

    $routeProvider.when('/', {
      templateUrl: 'views/cars.html',
      controller: 'CarCtrl'
    }).when('/car/:id', {
      templateUrl: 'views/description.html',
      controller: 'CarDescriptionCtrl'
    }).when('/compare/', {
      templateUrl: 'views/compare.html',
      controller: 'CarCompareCtrl'
    });
  }
]);

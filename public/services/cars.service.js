angular.module('appVehiculos').service('CarService', [
  '$http',
  'BASE_URL',
  function($http, BASE_URL){

    var CAR_ENDPOINT = BASE_URL + "/car/";

    function getCars(cb){
      $http.get(CAR_ENDPOINT).then(function(response){
        cb(null, response);
      },
      function (err){
        cb(err, null);
      });
    }

    function getCar(id, cb){
      $http.get(CAR_ENDPOINT + id).then(function(response){
        cb(null, response);
      },
      function (err){
        cb(err, null);
      });
    }

    return {
      getCars: getCars,
      getCar: getCar
    };
  }
]);

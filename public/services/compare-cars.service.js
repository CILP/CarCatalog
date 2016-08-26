angular.module('appVehiculos').service('CompareCarsService',
  function(){

    var carsToCompare = [];

    function addCar(car){
      carsToCompare.push(car);
    }

    function removeCar(car){
      var elementos = carsToCompare,
          len = carsToCompare.length,
          i;

      if (car){
        if (len < 2){
          carsToCompare = [];
        } else {
          for (i = 0; i !== len; i++){
            if (elementos[i].id === car.id){
              carsToCompare.splice(i, 1);
              break;
            }
          }
        }
      }
    }

    function resetList(){
      carsToCompare = [];
    }

    function getList(){
      return carsToCompare;
    }

    return {
      add: addCar,
      remove: removeCar,
      getAll: getList,
      reset: resetList
    };

  }
);

angular.module('appVehiculos').directive('acordion',
  function(){
    return {
      restrict: 'A',
      link: function(scope, element, attributes){
        $('.collapsible').collapsible({
          accordion : true
        });
      }
    };
  }
);

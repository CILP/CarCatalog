angular.module('appVehiculos').directive('collapseMenu',
  function(){
    return {
      restrict: 'A',
      link: function(scope, element, attributes){
        $(".button-collapse").sideNav();
      }
    };
  }
);

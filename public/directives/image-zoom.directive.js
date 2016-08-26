angular.module('appVehiculos').directive('imageZoom',
  function(){
    return {
      restrict: 'A',
      link: function(scope, element, attributes){
        $('.materialboxed').materialbox();
      }
    };
  }
);

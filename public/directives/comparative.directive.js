angular.module('appVehiculos').directive('comparative',
  function (){
    return {
      restrict: 'A',
      scope: {
        item: '=',
        addToCompareList: '&add',
        removeFromCompareList: '&remove'
      },
      link: function(scope, element, attributes){
        element.bind('click', function(){

          if (!element.hasClass('seleccionado')){

            if ($('.seleccionado').length < 3){
              element.addClass('seleccionado');
              scope.addToCompareList(scope.item);
            }
          } else {
            element.removeClass('seleccionado');
            scope.removeFromCompareList(scope.item);
          }
        });
      }
    };
  }
);

(function () {
    'use strict';

angular.module('proteo.ui.buscador-contacto.filtro').directive('buscadorContactoFiltroDirective',function() {
  return {
    scope 		: 	{},
    restrict	: 	"E",
    controller 	: 	'buscadorContactoFiltroCtrl',
    templateUrl : 	'src/proteo.ui.buscador-contacto.filtro.tpl.html'
  };
});

}());
(function () {
    'use strict';

	angular.module('proteo.ui.buscador-contacto.filtro').directive('buscadorContacto.filtro',function() {
	  return {
		scope: {
			filterCallback : "="
		},	    
		restrict	: 	"E",
	    controller 	: 	'buscadorContactoFiltroCtrl',
	    templateUrl : 	'./bower_components/proteo.ui.buscador-contacto.filtro/dist/proteo.ui.buscador-contacto.filtro.tpl.html',
	    link: function($scope){
			$scope.returnItemsFilter = function(){
				console.log("Filter >> "+$scope.filter);
	       		$scope.filterCallback($scope.filter);
	 		};
		}
	  };
	});

}());
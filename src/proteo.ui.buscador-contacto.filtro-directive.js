/* Buscador-Contacto.FILTRO DIRECTIVE */
	angular.module('proteo.ui.buscador-contacto.filtro').directive('buscadorContacto.filtro',function() {
	  return {
		scope: {
			contactsResult : "="
		},	    
		restrict	: 	"E",
	    controller 	: 	'buscadorContactoFiltroCtrl',
	    templateUrl : 	'src/proteo.ui.buscador-contacto.filtro.tpl.html',
	    link: function($scope){
			$scope.returnItemsFilter = function(){
				//console.log("contactsFiltered || "+JSON.stringify($scope.contactsFiltered));
	       		$scope.contactsResult($scope.contactFilteredFn());
	 		};
		}
	  };
	});
/* END Buscador-Contacto.FILTRO DIRECTIVE */

(function () {

    'use strict';	

	angular.module('proteo.ui.buscador-contacto.filtro',['pascalprecht.translate'])
		.config(['$translateProvider', function ($translateProvider) {
			// custom code 
	}]);
}());
(function () {
    'use strict';

angular.module('proteo.ui.buscador-contacto.filtro').controller('buscadorContactoFiltroCtrl', function($scope,personService) {
	// Code fo Controller
	$scope.filter={};
	$scope.datatitle = "AGENDA DE CONTACTOS";
});

}());

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
(function () {
    'use strict';

angular.module('proteo.ui.buscador-contacto.filtro').service('filtroService', function () {

/*
      this.getFullname = function(customer){return customer.firstName+ ' ' + customer.lastName;};
  
      this.basePath={};
      this.setBasePath = function(path) {basePath=path;};
      this.getBasePath = function() { return basePath;}
      */
  });

}());

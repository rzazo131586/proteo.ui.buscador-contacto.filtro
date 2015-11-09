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
});

}());

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

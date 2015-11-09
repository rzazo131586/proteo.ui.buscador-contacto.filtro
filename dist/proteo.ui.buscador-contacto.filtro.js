(function () {

    'use strict';	

	angular.module('proteo.ui.buscador-contacto.filtro',['pascalprecht.translate'])
		.config(['$translateProvider', function ($translateProvider) {
			// custom code 
	}]);
}());
(function () {
    'use strict';

	angular.module('proteo.ui.buscador-contacto.filtro').controller('buscadorContactoFiltroCtrl', function($scope, $http) {
		// Code fo Controller
		$scope.filter={};
		$scope.datatitle = "AGENDA DE CONTACTOS";

		$http.get('http://localhost:3000/users').success(function(data) {
            $scope.contacts 		= data;
            $scope.contactsFiltered = data;
        });
        
        // Reset INPUTS & LIST constacts ( future : service )
        $scope.contactReset = function(){
        	// reasign data into contactsFiltered for reset list contacts
			$scope.contactsFiltered = $scope.contacts;
        }

        // Validate if Inputs are empty && search into result service compare with filter
        $scope.contactFiltered = function (){
        	$scope.contactsFiltered = [];

        	for(var i = 0; i < $scope.contacts.length ; i++)
			{	
				if ($scope.filter.username == undefined && $scope.filter.name == undefined && $scope.filter.company == undefined){
					// no data in any input 
					$scope.contactsFiltered = $scope.contacts;
					return;
				}else{
					// validate its username like to name
					if( $scope.contacts[i].username.toLowerCase().indexOf($scope.filter.username.toLowerCase()) != -1 || 
						$scope.contacts[i].name.toLowerCase().indexOf($scope.filter.name.toLowerCase()) != -1 ||
						$scope.contacts[i].company.name.toLowerCase().indexOf($scope.filter.company.toLowerCase()) != -1 ){
							$scope.contactsFiltered.push($scope.contacts[i]);
						}
				}
       	 	};
 		}
	});

}());

(function () {
    'use strict';

	angular.module('proteo.ui.buscador-contacto.filtro').directive('buscadorContacto.filtro',function() {
	  return {
		scope: {
			contactsResult : "="
		},	    
		restrict	: 	"E",
	    controller 	: 	'buscadorContactoFiltroCtrl',
	    templateUrl : 	'./bower_components/proteo.ui.buscador-contacto.filtro/dist/proteo.ui.buscador-contacto.filtro.tpl.html',
	    link: function($scope){
			$scope.returnItemsFilter = function(){
				console.log("contactsFiltered || "+$scope.contactsFiltered);
	       		$scope.contactsResult($scope.contactsFiltered);
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

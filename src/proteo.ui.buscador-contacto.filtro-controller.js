/* Buscador-Contacto.FILTRO CONTROLLER */
	angular.module('proteo.ui.buscador-contacto.filtro').controller('buscadorContactoFiltroCtrl', function($scope, $http) {
		// Code fo Controller
		$scope.filter={};
		$scope.datatitle = "AGENDA DE CONTACTOS";

		// Call to service
		$http.get('http://localhost:3000/users').success(function(data) {
            $scope.contacts 		= data;
            $scope.contactsFiltered = data;
        });
        
        // Reset INPUTS & LIST constacts ( future : service )
        $scope.contactReset = function(){
        	// reasign data into contactsFiltered for reset list contacts
			$scope.contactsFiltered = undefined;
        }

        // Validate if Inputs are empty && search into result service compare with filter
        $scope.contactFilteredFn = function (){
        	$scope.contactsFiltered = [];

        	for(var i = 0; i < $scope.contacts.length ; i++)
			{	
				if ($scope.filter.username == undefined && $scope.filter.name == undefined && $scope.filter.company == undefined){
					// no data in any input 
					$scope.contactReset();
					return;
				}else{
					// validate its username like to name
					if( $scope.contacts[i].username.indexOf($scope.filter.username) != -1 || 
						$scope.contacts[i].name.indexOf($scope.filter.name) != -1 ||
						$scope.contacts[i].company.name.indexOf($scope.filter.company) != -1 ){
							$scope.contactsFiltered.push($scope.contacts[i]);
						}
				}
       	 	};
       	 	return $scope.contactsFiltered;
		}
	});
/* END Buscador-Contacto.FILTRO CONTROLLER */

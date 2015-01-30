Dhis2Api.directive('d2Dropdownattributeprogram', function(){
	return{
		restrict: 'E',
		templateUrl: 'directives/attributeprogram/attributeprogramView.html'
	}
	}); 
Dhis2Api.controller("d2DropdownattributeprogramController", ['$scope',"commonvariable",function ($scope,commonvariable) {
		$scope.ListAttributeprogram = commonvariable.programStages.programTrackedEntityAttributes;
		$scope.selectAttributeprogram = function(atSelected){
			commonvariable.Attributeprogram=atSelected;
			$scope.attributeprogramName=atSelected.name;
		}
}]);
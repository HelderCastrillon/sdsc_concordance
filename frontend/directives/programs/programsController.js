Dhis2Api.directive('d2Dropdownprograms', function(){
	return{
		restrict: 'E',
		templateUrl: 'directives/programs/programsView.html'
	}
	}); 
Dhis2Api.controller("d2DropdownprogramsController", ['$scope', 'Programs','Stages','ProgramsStages',"commonvariable",function ($scope,Programs,Stages,ProgramsStages,commonvariable) {
		$scope.ListPrograms = Programs.get();
		$scope.selectProgram = function(prSelected){
			commonvariable.program=prSelected;
			$scope.ProgramName=prSelected.name;
			$scope.SeeStage=true;
			$scope.ListStage=ProgramsStages.get({uid:prSelected.id});
		}
		$scope.selectStage=function(stSelected){
			$scope.StageName=stSelected.name;
			$scope.stage=Stages.get({uid:stSelected.id});
			commonvariable.stage=$scope.stage;
		}
}]);
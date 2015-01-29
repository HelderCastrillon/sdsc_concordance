appConcordanceSDSC.filter('to_trusted', ['$sce', function($sce){
        return function(codeHtml) {
            return $sce.trustAsHtml(codeHtml);
        };
    }]);
appConcordanceSDSC.controller('concordanceController', ["$scope",'$filter',"commonvariable","ProgramsStageDataelement", function($scope, $filter,commonvariable,ProgramsStageDataelement) {
	var $translate = $filter('translate');
    $scope.Clearform=function(){
    	window.location.reload();  	
    }
     $scope.GetValueOfDataSet=function(){
    	var Dataelements=commonvariable.DataSet.dataElements;

    	var LstDataElement="";
    	for(var k in  Dataelements) {
    		   LstDataElement= LstDataElement+ Dataelements[k].id+(k<Dataelements.length-1?";":"");
    		}
    	var StateForApproval = DataApprovalsState.get({ds:commonvariable.DataSet.id,pe:commonvariable.Period,ou:commonvariable.OrganisationUnit.id});
    	StateForApproval.$promise.then(function(data) {
    		$scope.Approval=data;
    	});
    
    	if($scope.Approval.mayReadData){
	    	var datasetValue=DataSetForm.get({ds:commonvariable.DataSet.id,pe:commonvariable.Period,ou:commonvariable.OrganisationUnit.id}); 
	    	datasetValue.$promise.then(function(data) {
	    		var result=data.codeHtml;
	    		$scope.DatasetValue=result.replace('id="shareForm"','id="shareForm" style="display:none" ');    		  		
	    	});
	    	$scope.statusappr=true;
	    	$scope.readyappr=($scope.DatasetValue.status=="UNAPPROVED_READY"?true:false);
    	}
    	
    }
    
    
}]);
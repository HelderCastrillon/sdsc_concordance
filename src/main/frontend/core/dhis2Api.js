/*
 *	Architeture 
 * 	Helder Yesid Castrillón
 * 	Hisp Colombia 2014
 * 
 * Core Module for using WebApi of dhis2
 * It is the persistence in the FrontEnd
 * 
 * */
var Dhis2Api = angular.module("Dhis2Api", ['ngResource']);

//Create all common variables of the apps 
Dhis2Api.factory("commonvariable", function () {

	var Vari={
			url:"http://localhost:8080/dhis/api/",
			urlbase:"http://localhost:8080/dhis/",
			OrganisationUnit:"",
			Period:"",
			DataSet:"",
			program:"",
			programStages:"",
			stage:""
			};

   return Vari; 
});

Dhis2Api.factory("userAuthorization", ['$resource','commonvariable',function($resource,commonvariable) {
	return $resource(commonvariable.url + "me/authorization/:menuoption",
		{
			menuoption:'@menuoption'
		},
		{ get: { method: "GET", transformResponse: function (response) {
			return {status: response};
		}
		}
		});

}]);

Dhis2Api.factory("Organisationunit",['$resource','commonvariable', function ($resource,commonvariable) {
	return $resource( commonvariable.url+"organisationUnits", 
   {
		fields:'name,id,level,parent',
		pageSize:'10',
		page:1
   }, 
  { get: { method: "GET"} });
}]);

Dhis2Api.factory("OrganisationunitLevel",['$resource','commonvariable', function ($resource,commonvariable) {
	return $resource( commonvariable.url+"organisationUnitLevels", 
   {
		fields:'name,id,level',
		pageSize:10
   }, 
  { get: { method: "GET"} });
}]);

Dhis2Api.factory("Programs",['$resource','commonvariable', function ($resource,commonvariable) {
	return $resource( commonvariable.url+"programs", 
   {}, 
  { post: { method: "POST"} });
}]);

Dhis2Api.factory("ProgramsStages",['$resource','commonvariable', function ($resource,commonvariable) {
	return $resource( commonvariable.url+"programs/:uid", 
   {
		uid:'@uid',
		fields:'programStages,id,name,programTrackedEntityAttributes'
   }, 
  { post: { method: "POST"} });
}]);

Dhis2Api.factory("Stages",['$resource','commonvariable', function ($resource,commonvariable) {
	return $resource( commonvariable.url+"programStages/:uid", 
   {
		uid:'@uid'
   },
  { get: { method: "GET"} });
}]);

Dhis2Api.factory("ProgramsStageDataelement",['$resource','commonvariable', function ($resource,commonvariable) {
	return $resource( commonvariable.url+"programStages/:uid", 
   {
		uid:'@uid',
		fields:'programStageDataElements'
   }, 
  { post: { method: "POST"} });
}]);



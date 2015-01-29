var appConcordanceSDSC = angular.module("appConcordanceSDSC", ['ngRoute','Dhis2Api','pascalprecht.translate','ui.bootstrap','d2Menu']);

appConcordanceSDSC.config(function($routeProvider) {
 
	  $routeProvider.when('/concordance', {
		    templateUrl: "modules/concordance/concordanceView.html",
		    controller: "concordanceController"
		  });
	  $routeProvider.otherwise({
	        redirectTo: '/'
	  });   

	});
appConcordanceSDSC.config(function ($translateProvider) {
  
	  $translateProvider.useStaticFilesLoader({
          prefix: 'languages/',
          suffix: '.json'
      });
	  
	  $translateProvider.registerAvailableLanguageKeys(
			    ['es', 'en'],
			    {
			        'en*': 'en',
			        'es*': 'es',
			        '*': 'en' // must be last!
			    }
			);
	  
	  $translateProvider.fallbackLanguage(['en']);
	  $translateProvider.determinePreferredLanguage();
	  
});
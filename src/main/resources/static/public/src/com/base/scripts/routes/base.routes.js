/**
 * 
 */

(function(){
	'use strict';
	
	angular.module('DashboardApp').config(RouteConfig);
	
	RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RouteConfig($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/");
		
		$stateProvider.state('main',{
			url: '/main',
			templateUrl: '/public/src/com/base/partials/main.html'
		}).state('sd',{
			url: '/SalesDashboard',
			templateUrl: '/authenticated/dashboard/landing/partials/landingpage.html',
			controller: 'LandingPageController as vm',
			resolve: {
				'$Countries' : ["ImportService", function(ImportService){
					return ImportService.getCountries().then(function(data){
						return data.countries;
					})
				}]
			}
		});
		
	}
})();
/**
 * 
 */

(function(){
	'use strict';
	
	angular.module('DashboardApp').config(RoutesConfig);
	
	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider){
		$stateProvider.state('main.login',{
			url:'/login',
			templateUrl: 'public/src/com/login/partials/login.html'
		})
	}
})();
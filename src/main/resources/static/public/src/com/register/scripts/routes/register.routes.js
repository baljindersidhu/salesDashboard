/**
 * 
 */

(function(){
	'use strict';
	
	angular.module('DashboardApp').config(RoutesConfig);
	
	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider){
		$stateProvider.state('main.user-registration',{
			url:'/register',
			templateUrl: 'public/src/com/register/partials/register.template.html',
			controller: 'UserRegistrationController as vm'
		})
	}
})();
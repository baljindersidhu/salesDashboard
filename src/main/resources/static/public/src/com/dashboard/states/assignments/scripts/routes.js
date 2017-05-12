/**
 * ===========================
 * define state for assessment
 * ===========================
 */

(function(){
	'use strict';
	
	angular.module('DashboardApp').config(RoutesConfiguration);
	
	RoutesConfiguration.$inject = ['$StateFileUrl', '$stateProvider', '$urlRouterProvider'];
	function RoutesConfiguration($StateFileUrl, $stateProvider, $urlRouterProvider){
		/** =========================
		 * State Configuration Object
		 * ==========================
		 */
		var stateConfig = {
			url: '/assignment',
			controller: 'AssignmentController as vm',
			templateUrl: $StateFileUrl + '/assignments/partials/assignment.html'
		};
		
		$stateProvider.state('sd.assignment', stateConfig);
	}
})();
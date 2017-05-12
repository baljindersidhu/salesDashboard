/**
 * This service sends POST call
 * to save countries and states
 * to populate initData in DB
 */

(function(){
	'use strict';
	
	angular.module('DashboardApp').service('ExportService', ExportService);
	
	ExportService.$inject = ['$http'];
	function ExportService($http){
		return {
			saveCountries: function(countries){
				$http.post('/initData/saveCountries', countries);
			},
			saveStates: function(states){
				$http.post('/initData/saveStates', states);
			}
		};
	}
})();
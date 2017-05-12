/**
 *  This service fetches
 *  countries and states to be loaded
 *  into the DB as initData
 */

(function(){
	'use strict';
	
	angular.module('DashboardApp').service('ImportService', ImportService);
	
	ImportService.$inject = ['$http'];
	function ImportService($http){
		return {
			getCountries: function(){
				return $http.get('public/src/com/dashboard/data/countries/countries.json').then(function(result){
					return result.data;
				}, function(data){
					throw Error('file not found');
				})
			}, 
			getStates: function(){
				return $http.get('public/src/com/dashboard/data/states/states.json').then(function(result){
					return result.data;
				}, function(data){
					throw Error('file not found');
				})
			}
		}
	}
})();
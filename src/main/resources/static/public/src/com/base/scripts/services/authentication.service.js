/**
 * Handles rest call for User
 * Authentication 
 */

(function(){
	'use strict';
	
	angular.module('DashboardApp').service('AuthenticationService', AuthenticationService);
	
	AuthenticationService.$inject = ['$http'];
	function AuthenticationService($http){
		return {
			checkIfAuthenticatedUser: function(){
				return $http.get('/test').then(function(data){
					console.log('authenticated');
					return data;
				},function(data){
					console.log('authentication failed');
					return data;
				});
			}
		};
	}
})();
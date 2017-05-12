/**
 * This service provides
 * logged in user details
 */

(function(){
	'use strict';
	
	angular.module('DashboardApp').service('UserDetailsService', UserDetailsService);
	
	function UserDetailsService(){
		var isUserLogin = false;
		return {
			getIfUserLoggedIn: function(){
				return isUserLogin;
			},
			setIfUserLoggedIn: function(userLogin){
				isUserLogin = userLogin;
			}
		};
	}
})();
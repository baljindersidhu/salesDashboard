/**
 * Checks if user is authenticated
 */

(function(){
	'use strict';
	
	angular.module('DashboardApp').controller('AuthenticationController', AuthenticationController);
	
	AuthenticationController.$inject = ['AuthenticationService', '$window'];
	function AuthenticationController(AuthenticationService, $window){
		var self 	 = this
		
		self.$onInit = function(){
			if(!validRequest($window.location)){
				authenticate();
			}
		}
	}
	
	function validRequest(location){
		var valid = false;
		var path  = location.href.split(location.origin + location.pathname);
		if(path && path.length > 1){
			if('#!/main' === path[1]){
				valid = true;
			}
			if(!valid && '#!/SalesDashboard' === path[1]){
				valid = true;
			}
		}
		return valid;
	}
	
	function authenticate(){
		window.location.href= '/test';
	}
	
	/**
	 * set Flag to show welcome message
	 * when current state is main
	 */
	cacheUserLoginForWelcomeMessage.$inject = ['UserDetailsService']
	function cacheUserLoginForWelcomeMessage(UserDetailsService){
		UserDetailsService.setIfUserLoggedIn(true);
	}
})();
/**
 * 
 */

(function(){
	'use strict';
	
	angular.module('DashboardApp').service('LoginService', LoginService);
	
	LoginService.$inject = ['$http'];
	function LoginService($http){
		return {
			performLogin: function(user){
				var data = decodeURI("username="+user.username+"&password="+user.password);
				var config = {
					headers : {
						"content-type" : "application/x-www-form-urlencoded"
					}
				};
				$http.post('/login', data, config);
			},
			performLogout: function(){
				return $http.get('/logout').then(function(response) {
					return;
				}, function(response) {
					return;
				});
			}
		}
	}
})();
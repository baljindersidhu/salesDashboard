/**
 * 
 */


(function(){
	'use strict';
	
	angular.module('DashboardApp').controller('UserLoginController', UserLoginController);
	
	UserLoginController.$inject = ['LoginService'];
	function UserLoginController(LoginService){
		var vm = this;
		vm.user = {};
		vm.showPassword = false;
		vm.performLogin = performLogin;
		
		function performLogin(){
			LoginService.performLogin(vm.user);
		}
	}
})();
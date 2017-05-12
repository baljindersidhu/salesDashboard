/**
 * 
 */

(function (){
	'use strict';
	
	angular.module('DashboardApp').controller('UserRegistrationController', UserRegistrationController);
	
	function UserRegistrationController(){
		var vm = this;
		vm.user = {};
	}
})();
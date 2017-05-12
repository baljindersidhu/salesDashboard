/**
 * Side Nav Buttons Action Service 
 */

(function(){
	'use strict';
	
	angular.module('DashboardApp').factory('SideNavActionFactory', SideNavActionFactory);
	
	SideNavActionFactory.$inject = ['LoginService', '$state', '$window', 'ShipmentDataService'];
	function SideNavActionFactory(LoginService, $state, $window, ShipmentDataService){
		var _sideNavActionFactory = function(){
			var self 			= this;
			self.action			= action;
			self.actionHandlers = {
			                         'dashboard'  : dashboardActionHandler,
			                         'assessment' : assessmentActionHandler,
			                         'assignment' : assignmentActionHandler,
			                         'sales'	  : salesActionHandler,
			                         'shipment'	  : shipmentActionHandler,
			                         'events'     : eventsActionHandler,
			                         'messages'   : messagesActionHandler,
			                         'settings'   : settingsActionHandler,
			                         'logout'     : logoutActionHandler
			};
			
			// ******************************
		    // Internal methods
		    // ******************************
			
			function action(actionName, callback, params){
				if(callback && typeof callback === "function")
					callback();
				if(actionName && Object.keys(self.actionHandlers).indexOf(actionName) !== -1){
					self.actionHandlers[actionName](params);
				}
			}
			
			function dashboardActionHandler(params){
				if(isCurrentState('dashboard')){
					reloadCurrentState()
				}else{
					$state.go('dashboard');
				}
			}
			
			function assessmentActionHandler(params){
				$state.go('assessment')
			}
			
			function assignmentActionHandler(params){
				$state.go('sd.assignment')
			}
			
			function salesActionHandler(params){
				if(isCurrentState('sales')){
					reloadCurrentState()
				}else{
					$state.go('sales')
				}
			}
			
			function shipmentActionHandler(params){
				if(params){
					ShipmentDataService.setSelectedCountry(params.countryCode);
					ShipmentDataService.setIfRequestedViaGlobalSearch(true);
				}else{
					ShipmentDataService.setIfRequestedViaGlobalSearch(false);
				}
				if(isCurrentState('shipment')){
					reloadCurrentState()
				}else{
					$state.go('shipment');
				}
			}
			
			function eventsActionHandler(params){
				if(isCurrentState('events')){
					reloadCurrentState()
				}else{
					$state.go('events')
				}
			}
			
			function messagesActionHandler(params){
				if(isCurrentState('messages')){
					reloadCurrentState()
				}else{
					$state.go('messages')
				}
			}
			
			function settingsActionHandler(params){
				if(isCurrentState('settings')){
					reloadCurrentState()
				}else{
					$state.go('settings')
				}
			}
			
			function logoutActionHandler(){
				var logout = LoginService.performLogout();
				logout.then(redirectToLogin);
			}
			
			function redirectToLogin(){
				$state.go('main')
			}
			
			function reloadCurrentState(){
				$state.go($state.current, {}, {reload: true});
			}
			
			function isCurrentState(stateName){
				return ($state.current.name === stateName);
			}

		};
		
		var factory = function(){
			return new _sideNavActionFactory();
		};
		
		return factory();
	}
})();
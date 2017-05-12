/**
 * 
 */

(function(){
	'use strict';
	
	angular.module('ShipmentApp').controller('ShipmentController', Controller);
	
	Controller.$inject = ['$ShipmentBasePath', '$Countries', '$state', '$States', 'ShipmentDataService'];
	function Controller($ShipmentBasePath, $Countries, $state, $States, ShipmentDataService){
		var vm 			= this;
		
		vm._logoPath 	= 'public/src/com/global/css/images/shipment/shipment2.png';
		vm._logoColor	= 'grey';
		vm.dataProvider = $ShipmentBasePath + '/shipmentData.tmpl.html';
		vm.formProvider	= $ShipmentBasePath + '/schedule.tmpl.html';
		vm.addIconPath	= 'public/src/com/global/css/images/material_icons/svg/ic_library_add_white_24px.svg';
		vm.saveIconPath	= 'public/src/com/global/css/images/material_icons/svg/ic_save_white_24px.svg';
		vm.country		= ShipmentDataService.getSelectedCountry();
		/*vm.disableSelect= ShipmentDataService.ifRequestedViaGlobalSearch();*/
		vm.countries	= $Countries;
		
		vm.action		= action;
		
		function action(country){
			/**
			 * ==================================================
			 * we are updating selected Country in
			 * ShipmentDataService if we are intending to update
			 * value in global search as well
			 * ==================================================
			 */
			ShipmentDataService.setSelectedCountry(country);
			
			// send server side call to fetch states for Country
			ShipmentDataService.getStates(country).then(function(data){
				callback(data);
			})
			
			function callback(states){
				ShipmentDataService.setStates(states);
			}
			
			// Reload current state
			$state.go($state.current, {}, {reload: true});
		}
		
		vm.$onInit = function(){
			ShipmentDataService.setStates($States);
		}
		
	}
})();
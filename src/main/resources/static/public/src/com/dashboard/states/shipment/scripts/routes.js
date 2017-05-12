/**
 * ===========================
 * define state for assessment
 * ===========================
 */

(function(){
	'use strict';
	
	angular.module('DashboardApp').config(RoutesConfiguration);
	
	RoutesConfiguration.$inject = ['$StateFileUrl', '$stateProvider', '$urlRouterProvider'];
	function RoutesConfiguration($StateFileUrl, $stateProvider, $urlRouterProvider){
		/** =========================
		 * State Configuration Object
		 * ==========================
		 */
		var countryStateConfig = {
			url: '/shipment',
			parent: 'sd',
			controller: 'ShipmentController as vm',
			templateUrl: $StateFileUrl + '/shipment/partials/shipment.html',
			resolve: {
				'$Countries' : ['$Countries', function($Countries){
					return $Countries;
				}],
				'$States' : ['ShipmentDataService', function(ShipmentDataService){
					var countryCode = ShipmentDataService.getSelectedCountry();
					return ShipmentDataService.getStates(countryCode).then(function(data){
						return data;
					})
				}]
			}
		};
		
		$stateProvider.state('shipment', countryStateConfig);
		
	}
})();
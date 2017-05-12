/**
 *==================================================
 * ShipmentDataService provides data
 * necessary for tracking down Shipments
 */

(function() {
	'use strict';

	angular.module('ShipmentApp').factory('ShipmentDataService', ShipmentDataService);

	ShipmentDataService.$inject = [ '$http', 'RestLoaderService']
	function ShipmentDataService($http, RestLoaderService) {
		
		function _shipmentDataService() {
			var country = 'IN';
			var viaGlobalSearch = false;
			var states = [];
			
			return {
				getStates : function(country) {
					return $http.get('/shipment/states?country='+country).then(function(result){
						return result.data;
					});
				},
				getShipments: function(fetchStart, fetchSize){
					return $http.get('/shipment/all?fetchStart='+params.fetchStart+'&fetchSize='+params.fetchSize).then(function(result){
						return result.data;
					});
				},
				getSelectedCountry: function(){
					return country;
				},
				setSelectedCountry: function(countryCode){
					country = countryCode;
				},
				ifRequestedViaGlobalSearch : function(){
					return viaGlobalSearch;
				},
				setIfRequestedViaGlobalSearch: function(bool){
					viaGlobalSearch = bool;
				},
				getCachedStates: function(){
					return states;
				},
				setStates: function($states){
					states = $states
				},
				scheduleShipment: function(ev, shipment){
					RestLoaderService.trigger(ev);
					return $http.post('/shipment/schedule', shipment).then(function successHandler(result) {
						RestLoaderService.stop();
						return result.data;
					}, function errorHandler(result){
						RestLoaderService.stop();
					});
				}
			};
		}
		
		var factory = function() {
			return new _shipmentDataService();
		}

		return factory();
	}
})();
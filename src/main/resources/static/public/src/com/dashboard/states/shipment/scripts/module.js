/**
 *======================================
 * Assignment Module contains Assignment
 * specific components
 * =====================================
 */

(function(){
	'use strict';
	
	angular.module('ShipmentApp', ['ui.router', 'ngMaterial', 'ngMessages', 'Hercules', 'md.data.table']);
	
	/**
	 * Base File Path
	 */
	var basePath = 'authenticated/dashboard/states/shipment/partials';
	angular.module('ShipmentApp').constant('$ShipmentBasePath', basePath);
	
})();
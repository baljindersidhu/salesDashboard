/**
 * This controller provides
 * methods for handling 
 * shipment schedule screen
 */

(function(){
	'use strict';
	
	angular.module('ShipmentApp').controller('SchedulerController', SchedulerController);
	
	SchedulerController.$inject = ['$ShipmentBasePath', 'ShipmentDataService', '$q', '$timeout', '$mdDialog'];
	function SchedulerController($ShipmentBasePath, ShipmentDataService, $q, $timeout, $mdDialog){
		var vm 					= this;
		vm._logoPath 			= 'public/src/com/global/css/images/shipment/shipment4.png';
		vm._logoColor			= 'grey';
		vm._logoMode			= 'full';
		vm.formProvider			= $ShipmentBasePath + '/scheduleForm.tmpl.html';
		vm.minDate				= new Date();
		vm.states				= ShipmentDataService.getCachedStates();
		vm.selectedItem 		= null;
	    vm.searchShipmentFrom   = null;
	    vm.searchShipmentTo 	= null;
	    vm.querySearch  		= querySearch;
	 	vm.schedule				= schedule;
	 	vm.dirtyForm			= dirtyForm;
	 	vm.clearForm			= clearForm;
	    
	 	// ******************************
	    // Internal methods
	    // ******************************
	 	
	    /**
	     * Search for states... use $timeout to simulate
	     * remote data service call.
	     */
	    function querySearch (query) {
	      var results = query ? vm.states.filter( createFilterFor(query) ) : vm.states;
	      if(!query){
	    	  return results;
	      }
	      var deferred = $q.defer();
	      $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
	      return deferred.promise;
	    }
	    
	    /**
	     * Create filter function for a query string
	     */
	    function createFilterFor(query) {
	      var lowercaseQuery = angular.lowercase(query);

	      return function filterFn(state) {
	        return (angular.lowercase(state.name).indexOf(lowercaseQuery) === 0);
	      };

	    }
	    
	    // schedule only in case of Valid Form else show warning
	    // message that form in invalid
	    function schedule(ev){
	    	// handle rest response
	    	function responseHandler(data){
	    		// clear form
	    		vm.clearForm();
	    	}
	    	if(vm.schedulerForm.$pristine){
	    		// form is in original state || operation: dirty form
	    		vm.dirtyForm();
	    	}else{
	    		if(vm.schedulerForm.$valid){
	    			// valid form || operation: submit form
	    			ShipmentDataService.scheduleShipment(ev, vm.shipment).then(function(data){
	    				responseHandler(data);
	    			});
	    		}else{
	    			// invalid form || operation: dirty form
	    			vm.dirtyForm();
	    		}
	    	}
	    }
	    
	    /**
	     * this method dirties every
	     * form item for informative
	     * user message
	     */
	    function dirtyForm(){
	    	angular.forEach(vm.schedulerForm, function(value, key) {
				if (typeof value === 'object' && value.hasOwnProperty('$modelValue') && value.$pristine && !value.$touched){
					value.$touched 		= true;
					value.$untouched	= false;
					value.$pristine		= false;
				}
			});
	    }
	    
	    /**
	     * clears shipment schedule form
	     */
	    function clearForm(){
	    	// clear form here
	    	vm.shipment = {};
	    	vm.schedulerForm.$setPristine();
	    	vm.schedulerForm.$setUntouched();
	    	angular.forEach(vm.schedulerForm, function(value, key) {
				if (typeof value === 'object' && value.hasOwnProperty('$modelValue')){
					value.$setPristine();
					value.$setUntouched();
				}
			});
	    }
	}
})();
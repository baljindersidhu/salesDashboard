/**
 * 
 */

(function(){
	'use strict';
	
	angular.module('DashboardApp').controller('LandingPageController', LandingPageController);
	
	LandingPageController.$inject = ['$mdToast', '$mdSidenav', '$q', '$timeout', 'SideNavButtonFactory', 'SideNavActionFactory', '$Countries'];
	function LandingPageController($mdToast, $mdSidenav, $q, $timeout, SideNavButtonFactory, SideNavActionFactory, $Countries){
		var vm                = this;
		vm.sidenavId          = 'left';
		vm.getToastProperties = getToastProperties;
		vm.showLoginToast     = showLoginToast;
		vm.toggle             = toggleSidenav;
		vm.buttons			  = SideNavButtonFactory.getButtons();
		vm.action			  = SideNavActionFactory.action;
		// calendar controls
		vm.today			  = new Date();
		// list of `state` value/display objects in global search
	    vm.states             = $Countries;
	    vm.selectedItem       = null;
	    vm.searchText         = null;
	    vm.querySearch        = querySearch;

	    // ******************************
	    // Internal methods
	    // ******************************

	    /**
	     * Search for users... use $timeout to simulate
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
	     * Build `states` list of key/value pairs
	     */
	    /*function loadAll() {
	      var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
	              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
	              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
	              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
	              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
	              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
	              Wisconsin, Wyoming';

	      return allStates.split(/, +/g).map( function (state) {
	        return {
	          value: state.toLowerCase(),
	          display: state
	        };
	      });
	    }*/

	    /**
	     * Create filter function for a query string
	     */
	    function createFilterFor(query) {
	      var lowercaseQuery = angular.lowercase(query);

	      return function filterFn(state) {
	        return (angular.lowercase(state.name).indexOf(lowercaseQuery) === 0);
	      };

	    }
		
		/*show toast on successful login*/
		function showLoginToast(){
			// only show welcome toast on login
			/*if(UserDetailsService.getIfUserLoggedIn()){
				UserDetailsService.setIfUserLoggedIn(false);
			}*/
			var $toast = $mdToast.build(vm.getToastProperties());
			$mdToast.show($toast);
		}
		
		/*return toast properties*/
		function getToastProperties(){
			return {
				templateUrl: '/authenticated/dashboard/landing/partials/login-success.toast.html',
				hideDelay: 1000,
				position: 'top right'
			};
		}
		
		/*toggle sidenav*/
		function toggleSidenav(){
			$mdSidenav(vm.sidenavId).toggle();
		}
		
	}
	
})();
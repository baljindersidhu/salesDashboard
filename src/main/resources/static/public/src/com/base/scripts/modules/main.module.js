/**
 * 
 */

(function(){
	
	// main app module
	angular.module('DashboardApp',
			[
			 'ui.router',
			 'ngMaterial',
			 'ngMessages',
			 'AssignmentApp',
			 'ShipmentApp'
			 ]);
	
	/**
	 * ==========================================
	 * Constant: Base File Path for Private files
	 * ==========================================
	 */
	var $StateFileUrl = '/authenticated/dashboard/states';
	angular.module('DashboardApp').constant('$StateFileUrl', $StateFileUrl);
	
	/**
	 * =============================================
	 * configuring spinner when state change starts
	 * =============================================
	 */
	
	angular.module('DashboardApp').run(['$rootScope', '$timeout',function($rootScope, $timeout){

	    $rootScope.stateIsLoading = false;
	    $rootScope.responseReceived = false;
	    $rootScope.$on('$stateChangeStart', function() {
	    	$rootScope.responseReceived = false;
	        /*$rootScope.stateIsLoading = true;*/
	        var promise = $timeout(triggerLoader, 3000);
	        function triggerLoader(){
	        	if(!$rootScope.responseReceived){
	        		$rootScope.stateIsLoading = true;
	        	}
	        	$timeout.cancel(promise);
	        }
	    });
	    $rootScope.$on('$stateChangeSuccess', function() {
	    	$rootScope.responseReceived = true;
	        $rootScope.stateIsLoading = false;
	    });
	    $rootScope.$on('$stateChangeError', function() {
	    	$rootScope.responseReceived = true;
	    	$rootScope.stateIsLoading = false;
	    });

	}]);
})();
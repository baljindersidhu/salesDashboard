/**
 *======================================
 * Assignment Module contains Assignment
 * specific components
 * =====================================
 */

(function(){
	'use strict';
	
	angular.module('AssignmentApp', ['ui.router', 'ngMaterial', 'ngMessages', 'Hercules', 'md.data.table']);
	
	/**
	 * Base File Path
	 */
	var basePath = 'authenticated/dashboard/states/assignments/partials';
	angular.module('AssignmentApp').constant('$AssignmentBasePath', basePath);
	
})();
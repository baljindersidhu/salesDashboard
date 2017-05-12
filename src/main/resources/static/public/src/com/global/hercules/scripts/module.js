/**
 * =================================
 * Hercules is the robust module
 * that contains all the global
 * components or in other words
 * the soul
 * =================================
 */

(function(){
	'use strict';
	
	angular.module('Hercules', ['ngMaterial', 'ngMessages']);
	
	/**
	 * ===========================================
	 * base path for all global component partials
	 * ===========================================
	 */
	var $herculesHome = 'public/src/com/global/components';
	angular.module('Hercules').constant('$herculesHome', $herculesHome);
})();
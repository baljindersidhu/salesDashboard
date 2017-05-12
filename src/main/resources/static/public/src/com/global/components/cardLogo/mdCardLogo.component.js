/**
 * ==============================================
 * md-card-logo
 * Extending Material Card to Provide Logo
 * Properties:
 * logo-path :  loads the path for Image Icon to
 * 				be shown inside Logo
 * logo-color:  provides colorName/Code to be
 * 				used as background for Logo
 * mode		 :  defines if Logo covers whole
 * 				card or only flex="10", 
 * 				values:('full' or anything else)
 * 
 * ==============================================
 */

(function(){
	'use strict';
	
	var mdCardLogo = {
			bindings:{
				_logoPath: '<logoPath',
				_logoColor: '<logoColor',
				_mode:'@mode'
			},
			templateUrl: 'public/src/com/global/components/cardLogo/mdCardLogo.component.html',
			controller: Controller,
	};
	
	angular.module('Hercules').component('mdCardLogo', mdCardLogo);
	
	Controller.$inject = ['$mdColors', '$mdColorUtil'];
	function Controller($mdColors, $mdColorUtil){
		var $ctrl 		 = this;
		
		/**
		 * if _logoColor is color code
		 * then get the RGB color
		 */
		$ctrl.$onInit = function(){
			if(colorCode($ctrl._logoColor)){
				$ctrl._logoColor = $mdColorUtil.hexToRgba($ctrl._logoColor)
			}
		}
		
		$ctrl.getMode = function(){
			if(isFullMode($ctrl._mode)){
				return 'grow';
			}else{
				return '10';
			}
		}
	}
	
	/**
	 * returns true if given
	 * input is a code
	 * i.e. contains '#'
	 */
	function colorCode(color){
		return color?(color.startsWith('#')?true:false):false;
	}
	
	/**
	 * return true if
	 * component is in
	 * "full" mode
	 */
	function isFullMode(mode){
		return (mode?(mode === 'full'?true:false):false);
	}
})();
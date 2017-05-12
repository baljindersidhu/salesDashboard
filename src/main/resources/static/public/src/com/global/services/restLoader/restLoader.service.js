/**
 * This service triggers/stops
 * restLoader when Rest Call is made
 */

(function(){
	'use strict';
	
	RestLoaderService.$inject = ['$mdDialog'];
	function RestLoaderService($mdDialog){
		var active 				= false;
		
		return{
			trigger	: function(ev){
				if(!active){
					// trigger mdDialog
					var dialog = this.dialogPresets(ev);
					active = true;
					this.show(dialog);
				}else{
					return;
				}
			},
			stop : function(ev){
				if(active){
					active = false;
					// stop mdDialog
					this.hide()
				}else{
					return;
				}
			},
			dialogPresets : function(ev){
				var target =  ev.currentTarget || ev.srcElement || document.body;
				var dialog = {
						templateUrl			: 'restLoader.tmpl.html',
						parent				: angular.element(document.body),
					    targetEvent			: target,
					    openFrom			: target,
					    closeTo				: target,
					    clickOutsideToClose	: false,
					    escapeToClose		: false
				};
		        
		        return dialog;
			},
			show : function(dialog){
				$mdDialog.show(dialog);
			},
			hide : function(){
				$mdDialog.hide();
			}
		}
	}
	
	angular.module('Hercules').service('RestLoaderService', RestLoaderService);
	angular.module('Hercules').run(['$templateCache',function($templateCache){
		var dialog	= `
			<md-dialog aria-label="Rest Loader">
				<md-dialog-content class="row">
					<img class="loader-height" ng-src="public/src/com/global/css/images/loaders/loader2.gif">
					<span>Processing...</span>
				</md-dialog-content>
			</md-dialog>
		`
		$templateCache.put('restLoader.tmpl.html', dialog);
	}]);
})();
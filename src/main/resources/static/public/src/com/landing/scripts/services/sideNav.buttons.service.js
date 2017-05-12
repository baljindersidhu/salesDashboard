/**
 * Returns buttons for SideNav on Landing Page
 */

(function(){
	'use strict';
	
	angular.module('DashboardApp').factory('SideNavButtonFactory', SideNavButtonFactory);
	
	function SideNavButtonFactory(){
		var _sideNavButtonFactory = function(){
			var self 		= this;
			var baseSrcUrl	= 'public/src/com/global/css/images/material_icons'; 
			self.getButtons = getButtons;
			
			// ******************************
		    // Factory methods
		    // ******************************
			
			
			/*return buttons*/
			function getButtons(){
				return [
				               {
				            	   title	: 'Dashboard',
				            	   name 	: 'dashboard',
				            	   isActive	: false,
				            	   src  	: baseSrcUrl + '/ic_dashboard_black_24dp/web/ic_dashboard_black_24dp_1x.png'
				               },
				               /*{
				            	   title: 'Assessments',
				            	   name : 'assessment',
				            	   src  : baseSrcUrl + '/ic_assessment_black_24dp/web/ic_assessment_black_24dp_1x.png'
				               },
				               {
				            	   title: 'Assignments',
				            	   name : 'assignment',
				            	   src  : baseSrcUrl + '/ic_assignment_black_24dp/web/ic_assignment_black_24dp_1x.png'
				               },
				               {
				            	   title: 'Sales',
				            	   name : 'sales',
				            	   src  : baseSrcUrl + '/ic_assessment_black_24dp/web/ic_assessment_black_24dp_1x.png'
				               },*/
				               {
				            	   title	: 'Shipments',
				            	   name 	: 'shipment',
				            	   isActive	: false,
				            	   src  	: baseSrcUrl + '/ic_local_shipping_black_24dp/web/ic_local_shipping_black_24dp_1x.png'
				               },
				               {
				            	   title	: 'Events',
				            	   name 	: 'events',
				            	   isActive	: false,
				            	   src  	: baseSrcUrl + '/ic_event_black_24dp/web/ic_event_black_24dp_1x.png'
				               },
				               {
				            	   title	: 'Messages',
				            	   name 	: 'messages',
				            	   isActive	: false,
				            	   src  	: baseSrcUrl + '/ic_message_black_24dp/web/ic_message_black_24dp_1x.png'
				               },
				               {
				            	   title	: 'Settings',
				            	   name 	: 'settings',
				            	   isActive	: false,
				            	   src  	: baseSrcUrl + '/ic_settings_black_24dp/web/ic_settings_black_24dp_1x.png'
				               },
				               {
				            	   title	: 'Logout',
				            	   name 	: 'logout',
				            	   src  	: baseSrcUrl + '/ic_exit_to_app_black_24dp/web/ic_exit_to_app_black_24dp_1x.png'
				               }
				];
				
			}
			
		};
		
		var factory = function(){
			return new _sideNavButtonFactory();
		}
		
		return factory();
	}
	
})();
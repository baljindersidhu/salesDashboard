/**
 * aarc: Asynchronous Angular Rest Call
 * 
 * This Service exploits $http bundled in Angular
 * for making rest calls and acts as a common interface
 * for all rest calls
 */

(function(){
	'use strict';
	
	AsynchronousAngularRestCall.$inject = ['$http', 'RestLoaderService'];
	function AsynchronousAngularRestCall($http, RestLoaderService){
		return{
			get: function(event, url, data, callback, config){
				if(!url){
					throw Error('aarc: url not provided for get request');
				}
				var dataPresent 	= data 		|| false;
				var configPresent 	= config 	|| false;
				var callback		= callback 	|| false;
				// enable loader prior to rest call
				RestLoaderService.trigger(event);
				
				function callDone(){
					// disable loader
					RestLoaderService.stop();
				}
				
				if(dataPresent && !configPresent){
					return $http.get(url, data).then(function successHandler(result){
						if(callback){
							callDone();
							callback(result);
						}else{
							callDone();
							return result;
						}
					}, function errorHandler(result){
						//Handle error here
						//throw Error('')
					});
				}else if(dataPresent && configPresent){
					return $http.get(url, data, config).then(function successHandler(result){
						if(callback){
							callDone();
							callback(result);
						}else{
							callDone();
							return result;
						}
					}, function errorHandler(result){
						//Handle error here
						//throw Error('')
					});
				}else{
					return $http.get(url).then(function successHandler(result){
						if(callback){
							callDone();
							callback(result);
						}else{
							callDone();
							return result;
						}
					}, function errorHandler(result){
						//Handle error here
						//throw Error('')
					});
				}
				// close loader once rest call is finished
			}
		}
	}
	
	angular.module('Hercules').service('$aarc', AsynchronousAngularRestCall);
})();
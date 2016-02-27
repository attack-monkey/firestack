// Firewire Module -----------------------------------------------------------

var firewireModule = angular.module('firewireModule', [
	"firebase"
]);

/*
	The following vars are reserved for the firebase module...
	- fb 				: firebase url
	- fbref 			: firebase reference
	- $rootScope.fw 	: firewire object
	- realtimeFw 		: Service that switches server data to realtime data
	- $rootScope.nofw	: The same as $rootScope.fw but without firewire
*/

firewireModule.run(function($rootScope, realtimeFw) {
    $rootScope.fw = fw.f;
    $rootScope.nofw = realtimeFw.get(fw.map);
});

firewireModule.value('fb','https://firestack-bc.firebaseio.com/');

firewireModule.factory('fbref',['$firebaseObject', 'fb', function($firebaseObject, fb){
	var res = new Firebase(fb);
	return res;
}]);

firewireModule.factory('realtimeFw',['$firebaseObject', '$rootScope', 'fbref', function($firebaseObject, $rootScope, fbref){

	return {
		get : function(arg){

			var res = {};

			angular.forEach(arg, function(value, key) {
				res[key] = $firebaseObject(fbref.child(value));
				res[key].$loaded().then(function (data) {
					$rootScope.fw[key] = res[key];
				});
			});

			return res;
		}
	};
	
}]);
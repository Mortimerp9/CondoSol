'use strict';

CondoSolApp.controller('MainCtrl', ["$scope", function($scope) {

	$scope.issues = [0,1,2,3,4,5,6];

	$scope.$on('$routeChangeSuccess', function ($event, current, previous) {
		console.log(current, previous);
		$scope.transitionState = true;
	});



}]);

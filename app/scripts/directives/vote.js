'use strict';

CondoSolApp.directive('vote', function() {
	var controller=function($scope, $attr) {
		$scope.$watch("issue", function() {
			console.log($scope);
			console.log($scope.issue);
		}, true);
	};
	controller.$inject = ["$scope", "$attrs"];

  return {
	  templateUrl: "templates/vote.html",
      restrict: 'E',
	  scope: {
		  issue: '=votedOn'
	  },
	  controller: controller
  };
});

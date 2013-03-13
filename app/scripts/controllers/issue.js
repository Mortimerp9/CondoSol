'use strict';

CondoSolApp.controller('IssueCtrl', ["$scope", "$routeParams", function($scope, $routeParams) {
	$scope.issue = {
		title: $routeParams.issueId+ ": Something is wrong with the elevator",
		text: "Arcu non odio euismod lacinia. Augue mauris augue neque gravida in fermentum et sollicitudin. Tristique nulla aliquet enim tortor. Velit aliquet sagittis id consectetur purus. A cras semper auctor neque vitae tempus quam pellentesque nec.",
		vote: 10,
		user: {name:'pierre', followers: 11, subscribers: 10},
		date: 1,
		voted:''
	};


	$scope.rateUpIssue = function() {
		if($scope.issue.voted != 'up') {
			$scope.issue.vote = $scope.issue.vote+1;
			if($scope.issue.voted == 'down') {
				$scope.issue.voted = '';
			} else {
				$scope.issue.voted='up';
			}
		}
	};
	$scope.rateDownIssue = function() {
		if($scope.issue.voted != 'down') {
			$scope.issue.vote = $scope.issue.vote-1;
			if($scope.issue.voted == 'up') {
				$scope.issue.voted = '';
			} else {
				$scope.issue.voted='down';
			}
		}
	};


	var uname = 0;
	var users = [{name: 'unity',
				  avatar: "http://tinyurl.com/ajapym4",
				  followers: 11,
				  subscribers: 220},
				 {name: 'Benjamin',
				  avatar: "http://tinyurl.com/aevdnze",
				  followers: 4,
				  subscribers: 22},
				 {name: "MrPark",
				  avatar: "http://tinyurl.com/aakz3cz",
				  followers: 31,
				  subscribers: 340
				 },
				 {name: "Man",
				  avatar: "http://tinyurl.com/axm4om9",
				  followers: 1,
				  subscribers: 0
				 }];
	var lorem = new Lorem();
	var id = 0;
	function makePost() {
		var toRet= {
			id: id++,
			user: users[uname],
			title: lorem.createText(1, Lorem.TYPE.SENTENCE),
			text: lorem.createText(4, Lorem.TYPE.SENTENCE),
			date: "1 day ago",
			vote: Math.floor(Math.random()*10+1),
			voted: ''
		};
		uname = Math.floor(Math.random()*users.length);
		return toRet;
	}

	$scope.voted = -1;

	$scope.rateUp = function(p) {
		if(p.voted != 'up') {
			p.vote = p.vote+1;
			if(p.voted == 'down') {
				p.voted = '';
				$scope.voted=-1;
			} else {
				p.voted='up';
				$scope.voted=p.id;
			}
		}
	};
	$scope.rateDown = function(p) {
		if(p.voted != 'down') {
			p.vote = p.vote-1;
			if(p.voted == 'up') {
				p.voted = '';
				$scope.voted=-1;
			} else {
				p.voted='down';
				$scope.voted=p.id;
			}
		}
	};

  $scope.posts = [];
	for(var i=0; i< 10; i++) {
		$scope.posts.push(makePost());
	}

	$scope.nextUser = users[Math.floor(Math.random()*users.length)];
	$scope.newTitle = '';
	$scope.newText = '';

	$scope.addSolution = function() {
		$scope.posts.push(
			{
				user: $scope.nextUser,
				vote: 0,
				title: $scope.newTitle,
				text: $scope.newText
			}
		);
		$scope.nextUser = users[Math.floor(Math.random()*users.length)];
		$scope.newTitle = '';
		$scope.newText = '';
	};

	$scope.$on('$routeChangeSuccess', function ($event, current, previous) {
		console.log(current, previous);
		$scope.transitionState = true;
	});


}]);

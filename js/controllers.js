var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope){
	$scope.author = {
		'name' : 'Amrit Deep Dhungana',
		'title' : 'Ruby Develoer',
		'compnay' : 'My Company'
	}
});

myApp.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hello ';
}]);
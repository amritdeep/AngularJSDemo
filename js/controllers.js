var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope){
	$scope.author = {
		'name' : 'Amrit Deep Dhungana',
		'title' : 'Ruby Develoer',
		'compnay' : 'My Company'
	}
});

// Handle Ajax Request
myApp.controller('DataController', ['$scope', '$http', function($scope, $http){

	$http({
		method: "GET",
		url: "js/data.json"
	}).then(function(data){
		$scope.developer = data;
	})

	// $http.get('js/data.json').success(function(data){
	// 	$scope.developer = data;
	// });
}]);

myApp.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hello ';
}]);


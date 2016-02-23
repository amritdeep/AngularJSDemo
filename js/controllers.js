var developerController = angular.module('developerController', []);

developerController.controller('MyController', function MyController($scope){
	$scope.author = {
		'name' : 'Amrit Deep Dhungana',
		'title' : 'Ruby Develoer',
		'compnay' : 'My Company'
	}
});

// Handle Ajax Request
developerController.controller('DataController', ['$scope', '$http', function($scope, $http){

	$http({
		method: "GET",
		url: "js/data.json"
	}).then(function(data){
		$scope.developer = data;
		$scope.developerOrder = 'name';
	});

	// $http.get('js/data.json').success(function(data){
	// 	$scope.developer = data;
	// });
}]);

developerController('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, '$routeParams'){
	$http({
		method: "GET",
		url: "js/data.json"
	}).then(function(data){
		$scope.developer = data;
		$scope.whichDev = $routeParams.devId;
	});

}]);

developerController.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hello ';
}]);


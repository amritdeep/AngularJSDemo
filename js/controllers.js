var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope){
	$scope.author = {
		'name' : 'Amrit Deep Dhungana',
		'title' : 'Ruby Develoer',
		'compnay' : 'My Company'
	}
});

myApp.controller('DataController', function DataController($scope){
	$scope.developer = 
		[
{
	'name' : 'Josh',
	'title' : 'Ruby Develoer',
	'compnay' : 'Crate Bind'
},
{
	'name' : 'John',
	'title' : 'Ruby Develoer',
	'compnay' : 'Crate Bind'
},
{
	'name' : 'Marry',
	'title' : 'Php Develoer',
	'compnay' : 'Crate Bind'
},
{
	'name' : 'Harry',
	'title' : 'Java Develoer',
	'compnay' : 'Crate Bind'
},
{
	'name' : 'Rick',
	'title' : '.Net Develoer',
	'compnay' : 'Crate Bind'
}

]
	

});

myApp.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hello ';
}]);


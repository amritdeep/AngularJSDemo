var myApp = angualar.module('myApp', [
	'ngRoute',
	'developerController'
]);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/list', {
		templateUrl: 'partials/list.html',
		controller: 'DataController'
	}).
	when('/details/:devId', {
		templateUrl: 'partials/details.html',
		controller: 'DetailsController'
	}).
	when('/greeting', {
		templateUrl: 'partials/greeting.html',
		controller: 'GreetingController'
	}).
	when('/welcome', {
		templateUrl: 'partials/welcome.html'
	}).
	when('/mainpage', {
		templateUrl: 'partials/mainpage.html',
		controller: 'MyController'
	}).
	otherwise({
		redirectTo: '/list'
	});
}]);
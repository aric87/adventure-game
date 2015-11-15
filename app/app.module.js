var app = angular.module('advApp', ['ngMaterial','ui.router','advAppRoutes']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider.state('error', {
		url: '/error',
		templateUrl: 'components/error/error.html'
	});
}]);





function DEBUG(msg, obj) {
    var dt = new Date();
    var timestamp = dt.toLocaleTimeString();
    console.log(timestamp, msg, obj);
}
var app = angular.module('advApp', ['ngMaterial','ui.router','advAppRoutes']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider.state('error', {
		url: '/error',
		templateUrl: 'components/error/error.html'
	});
}]);
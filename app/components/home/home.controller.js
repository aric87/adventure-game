appRoutes.config(['$stateProvider', function($stateProvider) {
	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'components/home/home.html',
		controller: 'HomeCtrl as ctrl'
	});
}]);

appRoutes.controller('HomeCtrl', [function() {	
	
}]);
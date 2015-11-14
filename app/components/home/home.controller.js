appRoutes.config(['$stateProvider', function($stateProvider) {
	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'components/home/home.html',
		controller: 'HomeCtrl as ctrl'
	});
}]);

appRoutes.controller('HomeCtrl', [function() {
	this.introText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias corporis saepe similique nam consectetur, assumenda sequi	consequuntur vero quis, natus quia aut eaque. Inventore dolorem eaque beatae ducimus, corporis sed."; 	
}]);
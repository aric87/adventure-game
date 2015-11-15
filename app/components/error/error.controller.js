appRoutes.config(['$stateProvider', function($stateProvider) {
	$stateProvider.state('error', {
		url: '/error',
		templateUrl: 'components/error/error.html',
        controller: 'ErrCtrl as err'
	});
}]);

appRoutes.controller('ErrCtrl', ['$state', function($state) {
	this.prevState = $state.previous.name;
	this.prevParams = $state.previousParams;
}]);
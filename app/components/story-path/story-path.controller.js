appRoutes.config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('storyPath', {
			url: '/story/:path',
			templateUrl: 'components/story-path/story-path.html',
			controller: 'StoryCtrl as story',
			resolve: {
				path: ['$stateParams', '$q', '$state', 'getChoiceAsync', function ($stateParams, $q, $state, getChoiceAsync) {
					var deferred = $q.defer();
					var choice = $stateParams.path;

					if (choice === 'reset') {;
						return 'reset';
					}
					getChoiceAsync(choice)
						.then(function (choiceData) {
							deferred.resolve(choiceData);
						}, function (err) {
							$state.go('error');
						});
					return deferred.promise;
				}]
			}
		});
}]);

appRoutes.controller('StoryCtrl', ['path', '$state', function (path, $state) {
	if (path === 'reset') {
		$state.go('home');
	}
	this.mainText = path.mainText;
	this.options = path.paths;
}]);
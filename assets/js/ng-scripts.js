var app = angular.module('advApp', ['ngMaterial','ui.router','advAppRoutes']);

app.config(['$urlRouterProvider', function($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
}]);

app.run(['$rootScope', '$state', function ($rootScope, $state) {
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $state.previous = fromState;
        $state.previousParams = fromParams;
    });
}]);


function DEBUG(msg, obj) {
    var dt = new Date();
    var timestamp = dt.toLocaleTimeString();
    console.log(timestamp, msg, obj);
}
var appRoutes = angular.module('advAppRoutes', ['ui.router', 'templates','sharedServices']);
var sharedServices = angular.module('sharedServices', []);
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
appRoutes.config(['$stateProvider', function($stateProvider) {
	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'components/home/home.html',
		controller: 'HomeCtrl as ctrl'
	});
}]);

appRoutes.controller('HomeCtrl', [function() {	
	
}]);
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
sharedServices.service('getChoiceAsync', ['getChoicesDataAsync', '$q', function (getChoicesDataAsync, $q) {	
	return function (choice) {
		var deferred = $q.defer();
		
			getChoicesDataAsync().then(function(choices) {
				if (choices.hasOwnProperty(choice)) {
					deferred.resolve(choices[choice]);
				} else {
					deferred.reject('error');
				}
			})				
		
		return deferred.promise;
	}
}]);
sharedServices.service('getChoicesDataAsync', ['$http', '$q', function ($http, $q) {

	var choices;

	return function () {
		var deferred = $q.defer();

		if (!choices) {
			$http.get('assets/data/choices.json', { cache: true })
				.then(function (res) {
					choices = res.data;
					deferred.resolve(choices);
				}, function (err) {
					deferred.reject(err);
				});
		} else {
			deferred.resolve(choices);
		}

		return deferred.promise;
	}
}]);
angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("components/error/error.html","<md-card><md-toolbar><h2 class=\"md-toolbar-tools\" layout-align=\"center\">Page Not Found</h2></md-toolbar><md-content layout=\"column\" layout-padding flex=\"none\"><p>Oops. Not sure how you got here, but this page wasn\'t found. Go back or start again from the beginning.</p><div id=\"game-buttons\" layout-gt-sm=\"row\" layout-sm=\"column\" layout-align=\"center center\" layout-wrap><div layout=\"row\"><md-button class=\"md-raised md-accent md-hue-3\" ui-sref=\"{{err.prevState}}({{err.prevParams}})\">Go Back {{ err.prevState }}</md-button></div><div layout=\"row\"><md-button class=\"md-raised md-primary md-hue-2\" ui-sref=\"home\">Start Over</md-button></div></div></md-content></md-card>");
$templateCache.put("components/home/home.html","<md-card><md-toolbar><h2 class=\"md-toolbar-tools\" layout-align=\"center\">Adventure Game</h2></md-toolbar><md-content layout=\"column\" layout-padding flex=\"none\"><p>Welcome to the Adventure of a lifetime. You will embark on a voyage to save the princess from the evil Bowser. Choose carefully, adventurer, as your decisions affect the outcome!</p><div id=\"game-buttons\" layout=\"row\" layout-align=\"center\"><md-button class=\"md-raised md-accent md-hue-3\" ui-sref=\"storyPath({path: \'chap1\'})\">Begin</md-button></div></md-content></md-card>");
$templateCache.put("components/story-path/story-path.html","<md-card><md-toolbar><h2 class=\"md-toolbar-tools\" layout-align=\"center\">Choose your Destiny</h2></md-toolbar><md-content layout=\"column\" layout-padding flex=\"none\"><p layout-padding layout-margin ng-bind=\"story.mainText\"></p><div id=\"game-buttons\" layout-gt-sm=\"row\" layout-sm=\"column\" layout-align=\"center center\" layout-wrap><div ng-repeat=\"option in story.options\"><div layout=\"row\"><md-button class=\"md-raised\" ng-class=\"option.path==\'reset\' ? [\'md-primary\', \'md-hue-2\'] : [\'md-accent\',\'md-hue-3\']\" ng-bind=\"::option.buttonText\" aria-label=\"::option.path\" ui-sref=\"storyPath({path: option.path})\"></md-button></div></div></div></md-content></md-card>");}]);
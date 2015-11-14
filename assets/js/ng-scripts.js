var app = angular.module('advApp', ['ngMaterial','ui.router','advAppRoutes']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider.state('error', {
		url: '/error',
		templateUrl: 'components/error/error.html'
	});
}]);
var appRoutes = angular.module('advAppRoutes', ['ui.router', 'templates']);

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
angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("components/error/error.html","<md-card><md-toolbar><h2 class=\"md-toolbar-tools\" layout-align=\"center\">Page Not Found</h2></md-toolbar><md-content layout=\"column\" layout-padding flex=\"none\"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias corporis saepe similique nam consectetur, assumenda sequi consequuntur vero quis, natus quia aut eaque. Inventore dolorem eaque beatae ducimus, corporis sed.</p><div id=\"game-buttons\" layout=\"row\" layout-align=\"center\"><md-button class=\"md-raised md-accent md-hue-3\">Option1</md-button></div></md-content></md-card>");
$templateCache.put("components/home/home.html","<md-card><md-toolbar><h2 class=\"md-toolbar-tools\" layout-align=\"center\">Choose your Destiny</h2></md-toolbar><md-content layout=\"column\" layout-padding flex=\"none\"><p>{{ ctrl.introText }}</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ut quis magnam ipsum quod quam veritatis quibusdam, labore, reprehenderit voluptas, nam dicta velit perferendis animi sed molestias eius quia ea!</p><div id=\"game-buttons\" layout=\"row\" layout-align=\"center\"><md-button class=\"md-raised md-accent md-hue-3\">Option1</md-button><md-button class=\"md-raised md-accent md-hue-3\">Option2</md-button><md-button class=\"md-raised md-accent md-hue-3\">Option3</md-button></div></md-content></md-card>");}]);
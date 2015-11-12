var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'gulp.*', 'add-stream'],
	replaceString: /\bgulp[\-.]/
});

// Define project folder paths
var paths = {
	ngscriptFilePath: 'assets/js/',
	ngscriptFileName: 'ng-scripts.js',
	ngscriptRawFiles: ['app/**/*.js', '!app/**/*Spec.js'],
	htmlPartials: 'app/**/*.html',
	indexFilePath: './',
	indexFileName: 'index.html',
	styles: 'assets/css/main.css',
	assets: ['assets/**', '!assets/{js,js/**}', '!assets/{libs,libs/**}', '!assets/{css,css/**}'],
	assetsFolder: 'assets/',
	build: 'build/'
};

// Start server and watch for file changes
gulp.task('default', ['connectDev'], function () {
	plugins.watch(paths.htmlPartials, function() { gulp.start(['bundle-scripts']); });
	plugins.watch(paths.ngscriptRawFiles, function() {gulp.start(['bundle-scripts']); });
	gulp.watch(paths.indexFilePath + paths.indexFileName, ['reload']);
	gulp.watch(paths.styles, ['reload']);
});

// Compile build files
gulp.task('build', ['usemin', 'copy-assets']);

// Compile and minify resources
gulp.task('usemin', ['clean-build', 'bundle-scripts'], function () {
	gulp.src(paths.indexFilePath + paths.indexFileName)
		.pipe(plugins.usemin({
			css: ['concat', plugins.autoprefixer('last 2 versions'), plugins.minifyCss({
				keepSpecialComments: 0
			})],
			vendor: ['concat', plugins.stripDebug(), plugins.uglify()],
			js: ['concat', plugins.stripDebug(), plugins.uglify()]
		}))
		.pipe(gulp.dest(paths.build));
});

// Copy remaining assets
gulp.task('copy-assets', function () {
    return gulp.src(paths.assets).pipe(gulp.dest(paths.build + paths.assetsFolder));
});

// Reset build folder
gulp.task('clean-build', function () {
	gulp.src(paths.build, {read: false})
		.pipe(plugins.clean());
});

// Start development server
gulp.task('connectDev', ['bundle-scripts'], function() {
	plugins.connect.server({
		root: [paths.indexFilePath],
		port: 8000,
		livereload: true
	});
});

// Start build server
gulp.task('connectBuild', function () {
	plugins.connect.server({
		root: [paths.build],
		port: 8080
	});
});

// Reload server
gulp.task('reload', function () {
	gulp.src(paths.indexFilePath + paths.indexFileName)
		.pipe(plugins.connect.reload());
});

// Concatenate all AngularJS files
gulp.task('bundle-scripts', ['clean-scripts'], function() {
	return gulp.src(paths.ngscriptRawFiles)
		.pipe(plugins.addStream.obj(partialsToTemplates()))
		.pipe(plugins.concat(paths.ngscriptFileName))
		.pipe(gulp.dest(paths.ngscriptFilePath))
		.pipe(plugins.connect.reload());
});

// Clean existing ng-scripts file
gulp.task('clean-scripts', function() {
	return gulp.src(paths.ngscriptFilePath + paths.ngscriptFileName, {read: false})
		.pipe(plugins.clean());
});

// Return stream of 'templates' module. 'templates' loads HTML partials to $templateCache
function partialsToTemplates() {
	return gulp.src(paths.htmlPartials)
		.pipe(plugins.htmlmin({ collapseWhitespace: true, removeComments: true }))
		.pipe(plugins.angularTemplatecache({ standalone: true }));
}
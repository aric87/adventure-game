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
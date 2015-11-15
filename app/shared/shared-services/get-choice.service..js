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
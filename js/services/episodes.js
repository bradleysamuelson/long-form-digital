app.factory('episodes', ['$http', function($http) {
	//provide location of json file
	return $http.get('http://lineheight.co/dn/s4test.json')
		.success(function(data) {
			return data;
		})
		.error(function(err) {
			return err;
		});
}]);
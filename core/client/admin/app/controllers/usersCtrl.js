app.controller('usersCtrl', function($scope, $location, UserService, $http) {

	$http.get('/api/admin/users', UserService.config).then(function(response){
		$scope.users = response.data;
	})
	.catch(function(response){
		$scope.errorMessage = response.data.error;
	});
	
});

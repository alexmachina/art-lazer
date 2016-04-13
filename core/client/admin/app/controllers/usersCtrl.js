app.controller('usersCtrl', function($scope, $location, UserService, $http) {
	/*Query all users from the database */
	$http.get('/api/admin/users', UserService.config)
		.then(function(response){
			$scope.users = response.data;
		})

	/* check if the user is loged in and, if is not, redirect
	 * to the login page*/
	.catch(function(response){
		if(response.status === 401)
			$location.path('/login');
		$scope.errorMessage = response.data;

	});

});

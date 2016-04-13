app.controller('usersCtrl', function($scope, $location, UserService, $http) {
	$scope.filteredUsers = [];
	
	
	/*Query all users from the database */
	$http.get('/api/admin/users', UserService.config)
		.then(function(response){
			
			$scope.users = response.data;
			//Pagination variables
			$scope.currentPage = 1;
			$scope.numPerPage = 5;
			$scope.totalItems = $scope.users.length * (10 /  $scope.numPerPage);
			$scope.maxSize = 5;

			
			$scope.filteredUsers = $scope.users.slice(0, $scope.numPerPage);

		})

	/* check if the user is loged in and, if is not, redirect
	 * to the login page*/
	.catch(function(response){
		if(response.status === 401)
			$location.path('/login');
		$scope.errorMessage = response.data;

	});

	//When the current pagination change
	$scope.$watch('currentPage', function(){
		
		if(!$scope.users) 
			return;
		var begin = ($scope.currentPage - 1) * $scope.numPerPage ;
		var end = begin + $scope.numPerPage;

		$scope.filteredUsers = $scope.users.slice(begin, end);
		
	
	});
	


});

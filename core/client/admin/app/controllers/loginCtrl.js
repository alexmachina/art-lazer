app.controller('loginCtrl',  function($scope, $http, $location, UserService, $rootScope){

	$scope.submit = function(){

		$http.post('/api/admin/user/login', $scope.user)
			.then(function(response) {

			UserService.jwt = response.data;

			//Sets the JWT header
			var config = { 
				headers : { 'Authorization' : 'Bearer ' + UserService.jwt }
			};

			//Sets the jwt and content-type for form data requests
			UserService.multiTokenConfig = { 
				headers : { 'Authorization' : 'Bearer ' + UserService.jwt,
					'Content-Type' : undefined}
			};

			UserService.config = config;

			//Gather the user data
			$http.get('/api/admin/user/' + $scope.user.username, config)
				.then(function(response) {
					UserService.user = response.data;

					//Publish the change of the Jwt
					$rootScope.$broadcast('jwt');

				})
			.catch(function(response){
				$scope.errorMessage = user.data.error;

			});


			$location.path('/');

			})
		.catch(function(response){
			$scope.errorMessage = response.data.error;
		});

	};
});

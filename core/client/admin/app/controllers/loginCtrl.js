app.controller('loginCtrl',  function($scope, $http, $location, UserService, $rootScope){

	$scope.submit = function(){

		$http.post('/api/admin/user/login', $scope.user).then(function(response){
			UserService.jwt = response.data;

			//Publish the change of the Jwt
			$rootScope.$broadcast('jwt');

			$scope.username = UserService.jwt;


			$location.path('/');
			
			

		}).catch(function(response){
			$scope.errorMessage = response.data.error;
		});
		
	};
});

app.controller("mainCtrl", function($rootScope, $scope, UserService, $location){
	//Subs to changes on jwt
	$rootScope.$on('jwt', function(){
		$scope.jwt = UserService.jwt;
		$scope.user = UserService.user;
			});

	$scope.jwt = UserService.jwt;
	if(!UserService.jwt) {
		$location.path('/login');
	}
});

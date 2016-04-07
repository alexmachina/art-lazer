app.controller("mainCtrl", function($rootScope, $scope, UserService, $location){
	//Subs to changes on jwt
	$rootScope.$on('jwt', function(){
		$scope.jwt = UserService.jwt;
		$scope.user = UserService.user;
			});

	if(!$scope.jwt) {
		//$location.path('/login');
		$scope.jwt = UserService.jwt;
	}
});

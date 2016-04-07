app.controller("mainCtrl", function($rootScope, $scope, UserService){
	//Subs to changes on jwt
	$rootScope.$on('jwt', function(){
		$scope.jwt = UserService.jwt;
	});
});

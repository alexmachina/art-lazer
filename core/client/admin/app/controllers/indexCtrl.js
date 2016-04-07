app.controller('indexCtrl', function($scope, $location, UserService){
	$scope.jwt = UserService.jwt;

});

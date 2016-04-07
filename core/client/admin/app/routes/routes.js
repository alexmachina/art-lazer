app.config(['$routeProvider', 
		function($routeProvider){

	$routeProvider.when('/login', {
		templateUrl : 'app/templates/login.html',
		controller : 'loginCtrl'
	})

	.when('/', {
		templateUrl : 'app/templates/index.html',
		controller : 'indexCtrl'
	});
	
	

}]);

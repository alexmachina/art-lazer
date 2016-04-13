app.config(['$routeProvider', 
		function($routeProvider){

	$routeProvider.when('/login', {
		templateUrl : 'app/templates/login.html',
		controller : 'loginCtrl'
	})

	.when('/', {
		templateUrl : 'app/templates/index.html',
		controller : 'indexCtrl'
	})
	
	.when('/Usuarios', {
		templateUrl : 'app/templates/users.html',
		controller : 'usersCtrl'
	})

	.when('/Usuario', {
		templateUrl : 'app/templates/user.html',
		controller : 'userCtrl'
	})
	
	
	.when('/Usuario/:username', {
		templateUrl : 'app/templates/user.html',
		controller : 'userCtrl'
	});
	
	
	

}]);

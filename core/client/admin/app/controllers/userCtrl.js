app.controller('userCtrl', function($scope, $routeParams, $http, $location, UserService){


	var url = '/api/admin/user/';
	var method = 'post';

	/*If there is a param in the route, it's and Edit */
	if($routeParams.username) {
		url = '/api/admin/user/' + $routeParams.username;
		method = 'put';

		$http.get('/api/admin/user/' + $routeParams.username, UserService.config)
			.then(function(response){
				$scope.user = response.data;
			})
		.catch(function(response){
			$scope.errorMessage = response.data.error;
		});
	}
	$scope.submit = function(){
		if($scope.form.$valid){

			var fd = new FormData($('form')[0]);
			var config = UserService.multiTokenConfig;

			config.url = url;
			config.method = method;
			config.data = fd;

			$http(config)
				.then(function(response){
					$location.path('/Usuarios');
				})
			.catch(function(response){
				$scope.errorMessage = "Erro: " + response.data.error;

			});
		} else {
			$scope.errorMessage = "Formulário inválido. Verifique os erros e tente novamente";
		
		}

	};

	$scope.voltar = function(){
		$location.path('/Usuarios');
	};


});

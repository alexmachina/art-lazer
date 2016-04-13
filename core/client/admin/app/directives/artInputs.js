app.directive('fileModel', ['$parse', function($parse){
	return {
		restrict : 'A',
		link: function(scope, element, attrs){
			var model = $parse(attrs.fileModel);
			var modelSetter = model.assign;

			element.bind('change', function(){
				scope.$apply(function(){
					modelSetter(scope, element[0].files[0]);
				});
			});
		}
	};
}]);


app.directive('artInput', function(){
	return {
		restrict : 'E',
		transclude: true,
		scope : {
			name: '@',
			bindModel: '=ngModel',
			label: '@',
			maxlength : "@",
			minlength: '@',
			required: '@',
			type: '@'
			
		},

		templateUrl: 'app/directives/art-input.html'
	
	};
	
});

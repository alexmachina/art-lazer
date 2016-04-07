describe("Some test...", function(){
	it("Do some assertion", function(){
		expect(true).toBe(true);
	});

	it("should contain message", inject(function($controller){
		var scope = {};
		var LoginCtrl = $controller('LoginCtrl', {$scope : scope});
		
		expect(scope.message).toBe("Hello, Login page!");
	}));
});

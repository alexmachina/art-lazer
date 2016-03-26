var Data = require("../../server/data"),
	assert = require('assert'),
	Schema = require("../../server/data/schema");

describe("MongoDb operations generator", function(){
	it("Connects to mongoDb", function(done){
		Data.connect(function(err, connection){
			assert.equal(null, err);
			assert.notEqual(typeof connection, 'undefined');
		
			done();
		});
	});
  
	it("Creates a User Schema", function(done){
		var User = new Schema.User({"username":"alex"});
		assert.equal(User.username, "alex");
		done();
	});

	it("Saves a User", function(done){
		var User = new Schema.User({"username":"alex", "password":"123123"});
		User.save(function(err, user){

			assert.equal(err, null);
			assert.equal(user.username,"alex");

			Schema.User.find(function(err, users){
				assert.equal(err, null);
				assert.equal(users[0].username, "alex");
				done();
			});
		});
	});


});

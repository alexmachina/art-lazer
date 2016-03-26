var Request = require('request');
var Server = require('../../server');
var Config = require('../../../core/server/config');
var assert = require('assert');

describe("Express generator", function(){
	var expressUrl = 'http://localhost:' + Config.expressPort;

	it("Can put express server live", function(){
		assert.equal(typeof Server.start, 'function');

		Server.start(function(expressApp) {
			Request(expressUrl + '/', function(error, response, body){
				assert.equal(response.statusCode, 200);
				assert.equal(body, "Hello");
			});
		});
	});
});

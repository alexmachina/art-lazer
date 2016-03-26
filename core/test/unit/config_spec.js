var Config = require('../../../core/server/config'),
	assert = require('assert');

describe("Configuration object generator", function () {

	it("Return valid configuration object populated", function(){
		assert.equal(typeof Config, 'object');
		assert.equal(typeof Config.environment, 'string');
		assert.notEqual(typeof Config.expressPort,'undefined');
		assert.notEqual(typeof Config.dbUrl, 'undefined');

	});
});


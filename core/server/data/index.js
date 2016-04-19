/* Module that provides connection to
 * mongoDb database */
var mongoose = require('mongoose'),
	config = require('../config');


	function DataIndex() {

	/*
	 * Function that connects and returns
	mongoose instance.
	*
	*TODO: Add authentication parameters being
	read from Config object.
	*/
	this.mongoose = mongoose;
	this.connect = function (cb){
		
		mongoose.connect(config.dbUrl + config.dbName);

		if(config.environment === 'development')
			mongoose.set('debug', true);

		var conn = mongoose.connection;

		conn.once('open', function() {
			if(typeof cb === 'function')
				cb(null, mongoose);
		});

		conn.on('error', function(err){
			if(typeof cb === 'function')
				cb(err);
		});
	};

}

var dataIndex = new DataIndex();
dataIndex.connect();

module.exports = dataIndex;




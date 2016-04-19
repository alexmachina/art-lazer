var Config = require('./config');
var ExpressApp = require('./config/express');

/* Object that handles the operations with Express Server */
function Server() {
	this.start = function(callback) {
	port = process.env.OPENSHIFT_NODE4_PORT || 3000;
	ip = process.env.OPENSFHIT_NODE4_IP || '127.0.0.1';

		//Starts server at configurated port.
		ExpressApp.listen(ExpressApp.get('port'), function(error){
			if(typeof callback === 'function')
				callback(error, ExpressApp);
		});
	};

}

var server = new Server();

module.exports = server;

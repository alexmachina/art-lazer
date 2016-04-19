var Config = require('./config');
var ExpressApp = require('./config/express');

/* Object that handles the operations with Express Server */
function Server() {
	this.start = function(callback) {
	port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
	ip = process.env.OPENSFHIT_NODEJS_IP || '127.0.0.1';

		//Starts server at configurated port.
		ExpressApp.listen(ExpressApp.get('port'), ip, function(error){
			if(typeof callback === 'function')
				callback(error, ExpressApp);
		});
	};

}

var server = new Server();

module.exports = server;

var Config = require('./config');
var ExpressApp = require('./config/express');

/* Object that handles the operations with Express Server */
function Server() {
	this.start = function(callback) {

		//Starts server at configurated port.
		ExpressApp.listen(ExpressApp.port, function(error){
			if(typeof callback === 'function')
				callback(error, ExpressApp);
		});
	};

}

var server = new Server();

module.exports = server;

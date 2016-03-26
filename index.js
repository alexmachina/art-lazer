var Server = require('./core/server');

Server.start(function(err, app){
	console.log("Started Express server at: " + app.get('port'));

});




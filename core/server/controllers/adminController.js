var JWT = require('jsonwebtoken');

function AdminController() {
	this.login = function(req, res){
		var myToken = JWT.sign({username : "Donnie"}, "donniebrasco");
		res.send(myToken);
	};
}


var adminController = new AdminController();

module.exports = adminController;

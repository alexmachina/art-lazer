/* Module that handles the default(Or index) requests */

function IndexController(){
	this.get = function(req, res) {
		debugger;
		res.send("Hello");
	
	};

}

var indexController = new IndexController();

module.exports = indexController;

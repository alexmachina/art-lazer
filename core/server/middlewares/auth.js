function Auth(){

	this.verify = function(req, res, next){
		next();
	};

}

var auth = new Auth();

module.exports = auth;

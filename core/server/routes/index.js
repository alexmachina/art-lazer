/* Module that represents the routing of default(Or Index) routes. */

var IndexController = require('../controllers');

module.exports = function (router, cb) {
	
	router.get('/', IndexController.get);

};

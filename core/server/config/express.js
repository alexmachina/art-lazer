/* This module is used to set configurations
 * and returns an instance of Express populated
 * with the settings*/
var Express = require('express'),
	Routes = require('../routes'),
	Config = require('../config'),
	ExpressJWT = require('express-jwt'),
	BodyParser = require('body-parser');
	
/* Module that settles express'es middlewares */
module.exports = function () {
	var express = Express();
	express.set('port', process.env.OPENSHIFT_NODEJS_PORT || Config.expressPort);

	express.set('ip', process.env.OPENSHIFT_NODEJS_IP);

	//Defines the application routes

	express.use("/api/admin", ExpressJWT({secret : "donniebrasco"}).unless({path : ['/api/admin/user/login']}));

	express.use(Express.static('./core/client/'));
	express.use('/images', Express.static('./core/server/data/content'));
	express.use("/admin", Express.static('./core/client/admin'));

	express.use(BodyParser.urlencoded({extended: true}));
	express.use(BodyParser.json());
	express.use(Routes);

	return express;

}();

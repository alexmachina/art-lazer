/* This module is used to set configurations
 * and returns an instance of Express populated
 * with the settings*/
var Express = require('express');
var Router = Express.Router();
var Routes = require('../routes');
var Config = require('../config');

/* Module that settles express'es middlewares */
module.exports = function () {
var express = Express();
express.set('port', Config.expressPort);

/* Might have to wrap routes use inside
* callback function later */
Routes(Router);
express.use(Router);


return express;

}();

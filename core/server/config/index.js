  /* Module simply return an object
   * that reflects the config.json file */
var fs = require('fs');

module.exports = function(){
var config = JSON.parse(fs.readFileSync(__dirname + "/config.json", "utf8"));
config.dbUrl = process.env.OPENSHIFT_MONGODB_DB_URL || config.dbUrl;
return config;
}();

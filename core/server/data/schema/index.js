
/* Module that defines the application schemas
 * and return them as ready-to-use mongoose models */
var data = require('../');

function Schema() {



var mongoose = data.mongoose;

var UserSchema = mongoose.Schema({
	'username' : String,
	'password' : String

});

this.User = mongoose.model('User', UserSchema);

}




	module.exports = new Schema();

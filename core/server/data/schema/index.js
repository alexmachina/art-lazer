
/* Module that defines the application schemas
 * and return them as ready-to-use mongoose models */
var data = require('../');

function Schema() {



var mongoose = data.mongoose;
var typeRUS =  {type : String, unique : true, required : true};
var UserSchema = mongoose.Schema({

	'username' : typeRUS,
	'password' : String,
	'email' : typeRUS,
	'picture' : String,
	'lastLogin' : Date,
	'verified' : Boolean
	
});



this.User = mongoose.model('User', UserSchema);

}




module.exports = new Schema();

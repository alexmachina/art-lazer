var mongoose = require('mongoose'),
	userSchema = require('../data/schema').User,
	utils = require('../utils/utils.js'),
	jwt = require('jsonwebtoken');

/*Controller for Users */
function UserController() {

	//Retrive all users from the database.
	this.getUsers = function (req, res) {

		userSchema.find(function(error, users){
			if(error)
				res.status(500).send({"error" : error});
			res.send(users);

		});
	};

	//Add a user to the database
	this.addUser = function(req, res) {

		var user = req.body, 
		newName = user.username + '.jpg';

		//If there is a picture, upload the picture then insert
		if(req.file){

			utils.moveAndRename(req.file.path, newName, utils.entities.USER, function(error){
				if(error)
					return res.status(500).send({"error" : error});

				user.picture = newName;

				userSchema.create(user, function(error, user){
					if(error)
						return res.status(500).send({"error" : error});

					return res.status(200).send(user);
				});

			});
			//Else, just insert.
		} else {
			userSchema.create(user, function(error, user){
				if(error)
					return res.status(500).send({"error" : error});

				return res.status(200).send(user);
			});


		}


	};


	//Delete a user from the database
	this.deleteUser = function(req, res){
		res.send("Not implemented");
	};

	//Retrive a single user from the database
	this.getUser = function(req, res) {

		var query = { username : req.params.username };

		userSchema.findOne(query, function(error, user){
			if(error)
				res.status(500).send({"error" : error});

			res.status(200).send(user);

		});
	};

	//Update a user from the database
	this.updateUser = function(req, res){
		var reqUser = req.body, //User inside request
		query = {username : req.params.username}, //Query inside parameters
		newName = req.body.username + '.jpg'; //Picture filename

		//If there is a pictre, upload, then insert
		if(req.file) {
		utils.moveAndRename(req.file.path, newName, utils.entities.USER, function(error){
			if(error)
				return res.status(500).send({"error" : error});

			reqUser.picture = newName;

			userSchema.update(query, {$set : reqUser}, function(error, user){
				if(error)
					return res.status(500).send({"error" : error});

				return res.status(200).send(user);
			});
		});
		
		//Just insert
		} else {
			console.log(reqUser);
			userSchema.update(query, {$set : reqUser}, function(error, user){
				if(error)
					return res.status(500).send({"error" : error});

				return res.status(200).send(user);
			});

		}


	};

	this.userLogin = function(req, res) {
		var loginInfo = req.body;
		//Check if data exists in request
		if(!loginInfo || !loginInfo.username || !loginInfo.password)
			return	res.status(500).send({"error" : "Missing username and/or password"});

		//Query the database for the user.
		userSchema.findOne(loginInfo, function(error, user){

			//Check if there was an error
			if(error)
				return res.status(500).send({"error" : error});
			//Check if the user was found
			if(!user) 
				return res.status(500).send({"error" : "User not found"});

			var myToken = jwt.sign(user, "donniebrasco");

			return res.send(myToken);
		});

	};
}

module.exports = new UserController();


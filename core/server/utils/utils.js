var path = require('path'),
	fs = require('fs');


function Utils(){
	this.entities = function(){
		return {
			USER : {name: "USER", folder: "core/server/data/content/user/"},
			CATEGORY : {name: "CATEGORY", folder: "/core/server/data/content/category/"}
		
		};
	}();
		
	
	this.moveAndRename = function(oldPath, newName, eType, cb) {

		newPath = eType.folder + newName;
		
		fs.rename(oldPath, newPath, function(error) {
			if(error){
				return cb(error);
			}

			return cb();

		});
	
	};

	this.deleteFile = function(fileName, eType, cb){
		try {
		pathToUnlink = eType.folder + fileName;
		console.log("File : " + fileName);

		fs.unlink(pathToUnlink, function(error){
			if(error)
				return cb(error.code);
			
			return cb();
		
		});
		} catch(error) {
			return cb(error.message);
		}
	
		
	};

}


module.exports = new Utils();

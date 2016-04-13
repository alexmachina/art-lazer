var app = angular.module("ArtLazerAdmin",["ngRoute","ui.bootstrap"]);

app.factory('UserService', function() {
	var self = this;

/*
 * workaround, Brazilin Little Way, hotfix, to set up an auth so 
 * it is possible to refresh the pages without
 * being redirected to login screen or receving
 * 401 Unauthorized from API
 *
 * */
	function makeDev(){
			self.jwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwiZ2V0dGVycyI6e30sIndhc1BvcHVsYXRlZCI6ZmFsc2UsImFjdGl2ZVBhdGhzIjp7InBhdGhzIjp7ImVtYWlsIjoiaW5pdCIsInVzZXJuYW1lIjoiaW5pdCIsIl9fdiI6ImluaXQiLCJwYXNzd29yZCI6ImluaXQiLCJfaWQiOiJpbml0In0sInN0YXRlcyI6eyJpZ25vcmUiOnt9LCJkZWZhdWx0Ijp7fSwiaW5pdCI6eyJfX3YiOnRydWUsInBhc3N3b3JkIjp0cnVlLCJlbWFpbCI6dHJ1ZSwidXNlcm5hbWUiOnRydWUsIl9pZCI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sImVtaXR0ZXIiOnsiZG9tYWluIjpudWxsLCJfZXZlbnRzIjp7fSwiX2V2ZW50c0NvdW50IjowLCJfbWF4TGlzdGVuZXJzIjowfX0sImlzTmV3IjpmYWxzZSwiX2RvYyI6eyJfX3YiOjAsInBhc3N3b3JkIjoiMTIzMTIzIiwiZW1haWwiOiJtYXRoaWFzQG1hdGhpYXMuY29tYSIsInVzZXJuYW1lIjoibWF0aGlhcyIsIl9pZCI6IjU3MDU3NzViZjVkYzA2ZGMwYzI2YWM3ZiJ9LCJfcHJlcyI6eyIkX19vcmlnaW5hbF9zYXZlIjpbbnVsbCxudWxsXX0sIl9wb3N0cyI6eyIkX19vcmlnaW5hbF9zYXZlIjpbXX0sImlhdCI6MTQ2MDAzNzkwMX0.Pa1lrqTl7jHw_-og7srwhQyFh0OButyAQdbrBrBZYSE";
	
	  self.config = { 
		headers : { 'Authorization' : 'Bearer ' + self.jwt }
	};

	  self.multiTokenConfig = {
		headers : { 'Authorization' : 'Bearer ' + self.jwt,
					'Content-type' : undefined}
	  };

		
	}
	makeDev();

	return this;
});


//

const express = require("express");
const https = require("https");
const app = express();




app.get("/", function(req, res){

	
	res.send("server running");
});











app.listen(3000, function(){
	console.log("Server running on port 3000");
});
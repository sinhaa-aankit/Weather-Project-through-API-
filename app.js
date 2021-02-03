//

const express = require("express");
const https = require("https");
const app = express();




app.get("/", function(req, res){

	const url = "https://api.openweathermap.org/data/2.5/weather?q=gaya&appid=83733882691fd4fbe45511863649a8c2&units=metric";

	https.get(url, function(response){
		console.log(response.statusCode);

		response.on("data", function(data){
			const weatherData = JSON.parse(data);
			const temp = weatherData.main.temp;
			const desc = weatherData.weather[0].description;
		})
	})



	res.send("server running");
});











app.listen(3000, function(){
	console.log("Server running on port 3000");
});
//

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));




app.get("/", function(req, res){

	res.sendFile(__dirname + "/index.html");

	// res.send("server running");
});

app.post("/", function(req, res){
	const cityName = req.body.cityName;
	const city = cityName;
	const apiKey = "83733882691fd4fbe45511863649a8c2";

	const url = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=" + apiKey +"&units=metric";

	https.get(url, function(response){
		console.log(response.statusCode);

		response.on("data", function(data){
			const weatherData = JSON.parse(data);
			const temp = weatherData.main.temp;
			const desc = weatherData.weather[0].description;
			const icon = weatherData.weather[0].icon;
			const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
			res.write("<h1> The weather in "+ city +" is currently " + desc + "</h1> <img src="+imageURL+ ">");
			res.write(" <br><h1>The temperature in "+ city +" is " + temp + " degree Celcious </h1>");
			// res.write("<img src="+ imageURL +">");
			res.send();
		})
	})
});













app.listen(3000, function(){
	console.log("Server running on port 3000");
});
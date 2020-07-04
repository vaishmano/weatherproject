const express =require("express");
const app =express();
const https = require("https");


app.get("/",function(req,res){

const url ="https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=0564f49c7082ef65f37db1c79fbf25af&units=metric";
https.get(url,function(response){
  console.log(response.statusCode);

  response.on("data",function(data){
    const weather =JSON.parse(data);
    const temp = weather.main.temp;
    console.log(temp);

    const description = weather.weather[0].description;
    console.log(description);

    const icon = weather.weather[0].icon;
    res.write("<p>The weather description is " +description+"</p>"+"<h1>The temperature in chennai is "+temp+" degrees</h1>");

    res.write("<img src=http://openweathermap.org/img/wn/"+icon+"@2x.png >")
  
    res.send()
  })

})
})



app.listen(3000,function(){
  console.log("you server is running....");
});

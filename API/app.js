var express = require("express")
var app = express();
const request = require('request');

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search")
});

app.get("/results", function(req, res){
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb";
    
    // API route
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            // Be aware to change body to js object
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });    
});


// Start the Server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie Server Start")
})
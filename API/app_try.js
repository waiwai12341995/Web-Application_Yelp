var express = require("express")
var app = express();
const request = require('request');

app.set("view engine", "ejs");


app.get("/results1", function(req, res){
    var query = req.query.search;
    var url = "https://apidocs.hkma.gov.hk/documentation/bank-svf-info/acctopen-banks-contact";
    
    // API route
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            // Be aware to change body to js object
            var data = JSON.parse(body);
            res.render("results1", {data: data});
        }
    });    
});



// Start the Server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Start")
})
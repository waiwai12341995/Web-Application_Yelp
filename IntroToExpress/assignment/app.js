var express = require("express")
var app = express()

// """"""Route""""""
app.get("/speak/:animal", function(req, res){
    var myanimal = req.params.animal;
    
    var dict = {"pig": "Oink", "cow": "Moo", "dog": "Woof Woof!"}
    res.send("The " + myanimal + " says '" + dict[myanimal] + "'")
});

app.get("/repeat/:word/:times", function(req, res){
    var myword = req.params.word;
    var mytime = Number(req.params.times);
    var result = "";

    for(var i = 0; i < mytime; i++){
        result = result + myword + " ";
    };
    res.send(result)
});

app.get("*", function(req, res){
    res.send("What are u doing now man !!")
})


// """"Start Server""""
app.listen(process.env.PORT, process.env.ID, function(){
    console.log("Start Server")
});
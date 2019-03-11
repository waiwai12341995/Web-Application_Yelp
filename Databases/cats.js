var mongoose = require("mongoose");
// cat_app = name of DB Connect to DB
mongoose.connect("mongodb://localhost:27017/cat_app",{useNewUrlParser: true});

// Define Cat(Pattern) here 
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

// catSchema Compile into model
var Cat = mongoose.model("Cat", catSchema); // We can do Cat.create, find, remove

// add new cat to the DB
// var fish = new Cat({
//     name: "Fish",
//     age: 10,
//     temperament: "HIHI"
// });

// Call back function
// fish.save(function(err, cat){
//     if(err){
//         console.log("Something Wrong")
//     } else {
//         console.log("Added Cat into DB")
//         console.log(cat)
//     }
// });    // cat will send back to DB


Cat.create({
    name:"Baby",
    age: 22,
    temperament: "Cute"
}, function(err, cat){
     if(err){
        console.log("Something Wrong Wo")
        console.log(err)
    } else {
        console.log("All the cats !!")
        console.log(cat)
    }
})

// Retrieve all cats from the DB and console.log each one
Cat.find({}, function(err, cats){
    if(err){
        console.log("Something Wrong Wo")
        console.log(err)
    } else {
        console.log("All the cats !!")
        console.log(cats)
    }
})
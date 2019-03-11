var express = require("express")
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var passport = require("passport");
var LocalStrategy = require("passport-local");

var seedDB = require("./seeds")

// Campground Model in /models/campground directory
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var User = require("./models/user");

// Route File -- requiring route
var commentRoutes = require("./routes/comments");
var campgoundRoute = require("./routes/campgrounds");
var indexRoute = require("./routes/index")

// Connect Mongoose with Yelp_Camp DB
mongoose.connect("mongodb://localhost:27017/yelp_camp_v7",{useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
//_dirname directory name
app.use(express.static(__dirname+"/public"));


// seedDB() // seed the database


//Passport configuration
app.use(require("express-session")({
    secret: "Baby Win the champion",
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//either empty or someone signin
//call this function in every single route
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

//Use those route file that we required
app.use(indexRoute);
app.use("/campgrounds",campgoundRoute); // Can write little code in route file campgrounds.js
app.use(commentRoutes);

// Start the Server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Yelp Server Start");
});
















var express = require("express");
var mongoose = require("mongoose");
var passport = require("passport");
var bodyParser = require("body-parser");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var User = require("./models/user");

mongoose.connect("mongodb://localhost:27017/authdemo",{useNewUrlParser: true});


var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.use(require("express-session")({
    secret: "Baby is the Best",
    resave: false,
    saveUninitialized: false
}));
// We need to use these 2 lines when we use passport
app.use(passport.initialize());
app.use(passport.session())

passport.use(new LocalStrategy(User.authenticate()))
//Reading the session taking data from the session that encode and uncode
//unencode = deserialize
//encode = serialize putting back to session
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser())

//=====================================================
//ROUTES

app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret", isLogin, function(req, res){
    res.render("secret");
});


//Auth Route
//Show Signup Form
app.get("/register", function(req, res){
    res.render("register");
});

//Handling user sign up
app.post("/register", function(req, res){
    req.body.username
    req.body.password
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err)
            return res.render("register");
        }
        //lock the user in session & Store correct information
        // We can use different strategy
        passport.authenticate("local")(req, res, function(){
            res.redirect("/secret");
        })
    })
});


//Login Route
// Render login form
app.get("/login", function(req, res){
    res.render("login");
});

//Login in Logic
app.post("/login", passport.authenticate("local", {
    //MiddleWare -- Code run before route call back
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function(req, res){
    
});

//Logout Route
// Render login form
app.get("/logout", function(req, res){
    //No any changing on DB
    //Passport is destroying all user data in the session
    req.logout();
    res.redirect("/");
});


//next thing will be call
function isLogin(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect("/login")
}



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Auth Server Start")
})
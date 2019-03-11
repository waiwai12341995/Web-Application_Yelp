var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser")
var methodOverride = require("method-override")
var expressSanitizer = require("express-sanitizer")

// Basic SetUp
// App Config
mongoose.connect("mongodb://localhost:27017/blog_app",{useNewUrlParser: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer())

// Mongoose/Model Config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    createdDate: {type: Date, default: Date.now}
});


// blogSchema Compile into model
var Blog = mongoose.model("Blog", blogSchema); 

// Blog.create(
//         {
//             name: "Test Blog",
//             image: "https://pixabay.com/get/e136b60d2af51c22d2524518b7444795ea76e5d004b0144590f6c978afe5b0_340.jpg",
//             body: "We are Testing"
//         }
// );

// RESTful Route
app.get("/", function(req, res){
    res.redirect("/blogs");
})

//INDEX ROUTE
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log(err)
        }else{
            res.render("index", {blogs: blogs});
        }
    })
})

//NEW ROUNTE
app.get("/blogs/new", function(req, res){
    res.render("new")
})

//CREATE ROUTE
app.post("/blogs", function(req, res){
    // Create blog
    //req.body -- things come from the form
    // Testing: console.log(req.body)
    req.body.blog.body = req.sanitize(req.body.blog.body)
    // Testing: console.log(req.body)
    
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new")
        }else{
            // Redirect
            res.redirect("blogs")
        };
    });
});

//SHOW ROUTE
app.get("/blogs/:id", function(req, res){
    //Show route
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("show", {blog: foundBlog});
        }
    });
});

// EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res){
    //Find the corresponding id post
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("edit", {blog: foundBlog});
        }
    });
});

// UPDATE ROUTE
app.put("/blogs/:id", function(req, res){
    req.body.blog.body = req.sanitizer(req.body.blog.body)
    //Find the corresponding id post
    // New Data
    // Call back
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

// DELETE ROUTE
app.delete("/blogs/:id", function(req, res){
    //destory blog
    Blog.findByIdAndRemove(req.params.id,  function(err){
        if(err){
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/");
        }
    });
    //redirect 
});



// Start the Server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Blog Server Start");
});
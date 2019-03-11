var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blog_app",{useNewUrlParser: true});

// POST - title, content (Create Model Post)
var postSchema = new mongoose.Schema({
    title: String,
    content: String
})

// Create Model (Post)
var Post = mongoose.model("Post", postSchema);


// User -email, name (Create Model User)
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    // Connect with post ******
    posts: [postSchema]
})

// How it look??
// {
//     email:"abc@gmail.com",
//     name: "waigor",
//     post: [
//         {title: "First Post", content: "Hi"},
//         {title: "Second", content: "Why"}
//         ]
// }

// Create Model (User)
var User = mongoose.model("User", userSchema)

// Create new user
// var newUser = new User({
//     email: "fakegor@gmail.com",
//     name: "Fake Gor"
// })

// newUser.posts.push({
//     title: "Post ah things sin",
//     content: "So difficult wo"
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(user)
//     }
// })

// Create new post
// var newPost = new Post({
//     title: "Love",
//     content: "HaloWorld"
// })

// newPost.save(function(err, post){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(post)
//     }
// })

// Retirve User
User.findOne({name: "Fake Gor"}, function(err, user){
    if(err){
        console.log(err);
    }else{
        user.posts.push({
            title: "1 to many",
            content: "So interesting"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            }else{
                console.log(user);
            }
        })
        
    }
});
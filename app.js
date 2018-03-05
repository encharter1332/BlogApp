var express = require("express");
var app  = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var methodOverride = require("method-override");
var flash = require("connect-flash");
// BASIC SETTING
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static(__dirname +"/public"));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/BlogApp_v1");

//DB SCHEMA

var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

/* Blog.create({
    title: "Test blog",
    image: "https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg",
    body: "BLABLABALBALABLABALBALBALABLABALABL"
}); */

app.get("/", function(req, res){
    res.redirect("posts");
})

app.get("/posts", function(req, res){
    Blog.find({},function(err, posts){
       if (err){
           console.log(err);
       }  else {
           
           res.render("posts", {posts : posts});
       }
    });
});

app.get("/posts/new", function(req,res){
    res.render("new");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Blog app server is running");
});
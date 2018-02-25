var express = require("express");
var app  = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var methodOverride = require("method-override");
var flash = require("connect-flash");

app.set("view engine","ejs");

app.get("/", function(req, res){
    res.render("index");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Blog app server is running");
});
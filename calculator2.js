//jshint esversion:6
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.post ("/", function(req, res){
  var num1 = Number (req.body.num1);
  var num2 = Number (req.body.num2);
  var result = num1 + num2;
    res.send("The result of the calculation is " + result);
});
app.get ("/", function(req, res){
  res.sendFile(__dirname + "/index.html" );
});

//BMI
app.get ("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmicalculator.html");
});
app.post("/bmicalculator", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var bmi = (num2/num1/num1) * 10000;
  res.send("Your BMI is " + Math.floor(bmi));
});
app.listen(8080, function() {
  console.log("Server started on port 8080");
});


// const ejs = require("ejs");
// const mongoose = require('mongoose');

// app.set('view engine', 'ejs');

// app.use(express.static("public"));

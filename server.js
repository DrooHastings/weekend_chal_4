//requires
var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var path = require ('path');
var mongoose = require('mongoose');

//connect to mongodb
// mongoose.connect('mongodb://localhost:27017/realestate');

//define schema

//global realestate model

//uses
app.use(express.static('public'));
app.use( bodyParser.urlencoded ({extended: true}));

//globals
var port = process.env.PORT || 8888;

//spin up server
app.listen(port, function(){
  console.log('base url hit');
  

});

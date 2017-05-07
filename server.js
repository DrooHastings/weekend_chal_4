//requires
var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var path = require ('path');
var mongoose = require('mongoose');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/realestate');

//define schema
var listingsSchema = mongoose.Schema({
  cost: Number,
  rent: Number,
  sqft: Number,
  city: String
});
//global listings model
var listings = mongoose.model( 'listings', listingsSchema);
//uses

app.use(express.static('public'));
app.use( bodyParser.urlencoded ({extended: true}));

//globals
var port = process.env.PORT || 8888;

//spin up server

app.listen(port, function(){
  console.log('base url hit');
});

//serve html
app.get('/', function (req, res){
  res.sendFile( path.resolve('public/views/index.html'));

});

app.get('/listings', function(req,res){
  listings.find().then(function(data){
    res.send(data);
      // console.log(data);

    });//end callback

  console.log('in /listings');


});// end get route

app.post('/rentListings', function(){
  console.log('in rentListings route');
  res.sendStatus(200);

});

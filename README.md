# Weekend Challenge 4 - Mongo and Bootstrap



Here are the requirements of the project:
* Create a Full Stack application from the ground up using jQuery, Node, and MongoDB,

***Todos***
Steps from Client/Server Review:
===


Set up Node + Express to use Body-Parser
---
[x] npm init
[x] npm install express --save
[x] npm install body-parser   [x] save

Client side setup
---
[x] created public folder
[x] create vendors folder in public
[x] create views folder in public
[x] create index.html and styles.css in views folder
[x] place jquery js file in vendors
[x] create cripts folder in public
[x] create client.js in scripts
[x] src jquery, then client.js
[x] link bootstrap
[x] link styles.css
[x] add .gitignore file
[x] gitignore .DS_Store and node_modules

Server setup
---
[x] create'server.js'
[x] require the following:
 - express
 - path
 - body-parser
[x] set app to be an express app: var app = express() ;
- set up uses:
 [x] bodyParser.urlencoded
 [x] express.static for public folder
[x] add spin up server code (app.listen)
[x] test server up
[x] add serve the html file code
[x] restart server
[x] open page in browser

GET Route that gets data

**Client side function getListings
[x] called onReady
[] for loop that appends to an .outputDiv
[] p tags for response[i].whatever

[]conditional for if (response[i].cost = null) append response[i].rent

else append response[i].cost**

***Server side
[x] connect to mongoose
  mongoose.connect( 'mongodb://localhost:27017/realestate');
[x] mongoose schema
[x] mongoose model
  var albums = mongoose.model( 'listings', listingsSchema);
[x] app.get with mongoose call:
[x] in app.get:
  listings.find().then(function(data){
  // console.log('this is data:', data);
  res.send(data);

[]  ****


[] make two schemas
var buys = mongoose.model('buys', buySchema, 'listings');
var rents = mongoose.model('rents', rentalSchema, 'listings');

[] function with conditional for two ajax POST routes depending on .val of dropdown

[x] div for input

[x] input for city
[x] input for square footage
[x] input for cost
[x] input for city
[x] create dropdown with option to list rent or purchase
[x] create button to add property

[x] jquery event listener for addListing function

[]



* Work with the data set that we provide for you,
* Use Bootstrap to present the data,
* Account for the different data (“rent” versus “cost) and ensure that this is noted on the display of the information, by listing “For Rent” or “For Sale” based on which of the two properties that it has.

To work with the provided data:
* Download the provided file,
* Run this command in your Terminal: `mongoimport --db realestate --collection listings --file listingData.js`
* Note that you will need to run this from the folder which you download the ‘listingData.js’ to.

## Hard Mode
Create an interface for adding additional properties to the collection. You will need to give the user an option for either a Rent property, or a Sale property. Check out this Stack Overflow for information on how to accomplish this:
http://stackoverflow.com/questions/14453864/use-more-than-one-schema-per-collection-on-mongodb

## Pro Mode
Host the application on Heroku and mLabs. You will need to transfer the data up to mLabs. In will need to research to accomplish this.

Welcome to weekend challenge 4! This weekend, you will take on the role of an application developer for a real estate company. You will be working with Data that we will be providing to you. It will be a collection called “listings”. Inside of it, you will find information for properties that are either for Rent or for Sale.

You job, is to get this Data on the DOM, accounting for the inconsistent datatypes that are possible with MongoDB. But additionally, let’s bring in Bootstrap to the mix to make sure that the application looks as good as possible.

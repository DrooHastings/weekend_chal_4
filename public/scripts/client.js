$(document).ready( onReady);

function onReady(){
  console.log('js and jq up');
  getListings ();
  $('#addButton').on('click', addListings);
}

function getListings (){
  $.ajax({
    type: 'GET',
    url: '/listings',
    success: function(response){

      var outputDiv = $('#outputDiv');
      outputDiv.empty();
      // console.log(response);
      // $('#outputDiv').append('<p>' + response + '</p>' );
      //for loop w appends
      for (var i = 0; i < response.length; i++) {
        // console.log(response[i]);
        // console.log(response[i].cost);
        var cellText = '<div class=" listDiv col-sm-3 game">';
        cellText += "<p>" + "Beautiful home in " + response[i].city + "</p>";
        cellText += "<p>"  + "Featuring " + response[i].sqft + " square feet! </p>";
        if (response[i].cost ) {
          cellText += "<p>" + "Buy for only $" + response[i].cost + "! </p></div>";
        } else {
          cellText += "<p>" + "Rents for only $" + response[i].rent+ "! </p></div>";
        }// end else
        outputDiv.append( cellText);
      }// end for
    }// end success
  });//end ajax
}// end getListings

function addListings(){
  console.log('in addListings');
  var rbSelection = $('#rbSelect').val();
  if (rbSelection === 'Rent') {
      console.log('you are renting!', rbSelection);
      var rentObject = {
        city: $("#cityIn").val(),
        sqft: $("#sqftIn").val(),
        rent: $("#costIn").val()
        };
        $.ajax ({
          type: 'POST',
          url: '/rentListings',
          data: rentObject,
          success: function(response){
            console.log('in POST route /rentListings for Rent');
            console.log('this is rentObject', rentObject);
          }//end success
        });//end ajax POST


  }else {
    console.log('you are ready to buy!', rbSelection);
      var costObject = {
        city: $("#cityIn").val(),
        sqft: $("#sqftIn").val(),
        cost: $("#costIn").val()
        };
        $.ajax ({
          type: 'POST',
          url: '/sellListings',
          data: costObject,
          success: function(response){
            console.log('in POST route /listings for Sell');
            console.log('this is costObject', costObject);
          }//end success
        });//end ajax POST
      }// end else
}//end addListings

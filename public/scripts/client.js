$(document).ready( onReady);

function onReady(){
  console.log('js and jq up');
  getListings ();
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

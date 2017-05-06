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
      // outputDiv.empty();
      // console.log(response);
      // $('#outputDiv').append('<p>' + response + '</p>' );
      //for loop w appends
      for (var i = 0; i < response.length; i++) {
        console.log(response[i]);
      }// end for
    }// end success

  });//end ajax


}// end getListings

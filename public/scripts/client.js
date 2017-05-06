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
      console.log( response );
      //empty outputDiv
      //for loop w appends
    }// end success

  });//end ajax


}// end getListings

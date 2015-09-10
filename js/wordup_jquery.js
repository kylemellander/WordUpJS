$(document).ready(function(){
  $("form").submit(function(event){
    var phrase = $('#phrase').val();
    var result = wordUp(phrase);

    $("#results").empty();
    $("#results").append(displayWordUp(result));
    $("#results").show();
    event.preventDefault();
  });
});
